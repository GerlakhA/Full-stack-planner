import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { PomodoroRoundDto, PomodoroSessionDto } from './dto/pomodoro.dto'
import { PomodoroService } from './pomodoro.service'

@Controller('user/timer')
export class PomodoroController {
	constructor(private readonly pomodoroService: PomodoroService) {}

	@Auth()
	@Get('today')
	async getTodaySession(@CurrentUser('id') userId: string) {
		return this.pomodoroService.getTodaySession(userId)
	}

	@Auth()
	@HttpCode(200)
	@Post()
	async create(@CurrentUser('id') userId: string) {
		return this.pomodoroService.create(userId)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put('/round/:id')
	async updateRound(@Body() dto: PomodoroRoundDto, @Param('id') id: string) {
		return this.pomodoroService.updateRound(dto, id)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put(':id')
	async update(
		@Body() dto: PomodoroSessionDto,
		@Param('id') id: string,
		@CurrentUser('id') userId: string
	) {
		return this.pomodoroService.update(dto, id, userId)
	}

	@Auth()
	@HttpCode(200)
	@Delete(':id')
	async deleteSession(
		@Param('id') id: string,
		@CurrentUser('id') userId: string
	) {
		return this.pomodoroService.deleteSession(id, userId)
	}
}
