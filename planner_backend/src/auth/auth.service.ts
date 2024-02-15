import {
	BadRequestException,
	Injectable,
	NotFoundException,
	UnauthorizedException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { verify } from 'argon2'
import { Response } from 'express'
import { PrismaService } from 'src/prisma.service'
import { UserService } from 'src/user/user.service'
import { AuthDto } from './dto/auth.dto'

@Injectable()
export class AuthService {
	EXPIRE_DAY_REFRESH_TOKEN = 1
	REFRESH_TOKEN_NAME = 'refreshToken'

	constructor(
		private prisma: PrismaService,
		private jwt: JwtService,
		private userService: UserService
	) {}

	async login(dto: AuthDto) {
		const { password, ...user } = await this.validateUser(dto)
		const tokens = await this.issueTokens(user.id)

		return { user, ...tokens }
	}

	async register(dto: AuthDto) {
		const existingUser = this.userService.getByEmail(dto.email)

		if (!existingUser) throw new BadRequestException('User already exists')

		const { password, ...user } = await this.userService.create(dto)
		const tokens = await this.issueTokens(user.id)

		return { user, ...tokens }
	}

	private issueTokens(userId: string) {
		const data = { id: userId }

		const accessToken = this.jwt.sign(data, {
			expiresIn: '1h'
		})

		const refreshToken = this.jwt.sign(data, {
			expiresIn: '7d'
		})
		return { accessToken, refreshToken }
	}

	private async validateUser(dto: AuthDto) {
		const user = await this.userService.getByEmail(dto.email)

		if (!user) throw new NotFoundException('User not found')

		const isValid = verify(user.password, dto.password)

		return user
	}

	addRefreshTokentoResponse(res: Response, refreshToken: string) {
		const expiresIn = new Date()
		expiresIn.setDate(expiresIn.getDate() + this.EXPIRE_DAY_REFRESH_TOKEN)

		res.cookie(this.REFRESH_TOKEN_NAME, refreshToken, {
			httpOnly: true,
			domain: 'localhost',
			expires: expiresIn,
			sameSite: 'none',
			secure: true
		})
	}

	removeRefreshTokenFromResponse(res: Response) {
		const expiresIn = new Date()
		expiresIn.setDate(expiresIn.getDate() + this.EXPIRE_DAY_REFRESH_TOKEN)

		res.cookie(this.REFRESH_TOKEN_NAME, {
			httpOnly: true,
			domain: 'localhost',
			expires: new Date(0),
			sameSite: 'none',
			secure: true
		})
	}

	async getNewTokens(refreshToken: string) {
		const result = await this.jwt.verifyAsync(refreshToken)

		if (!result) throw new UnauthorizedException('Invalid refresh token')

		const { password, ...user } = await this.userService.getById(result.id)

		const tokens = this.issueTokens(user.id)

		return { user, ...tokens }
	}
}
