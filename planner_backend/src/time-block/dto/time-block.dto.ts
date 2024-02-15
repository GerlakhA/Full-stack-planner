import { IsNumber, IsOptional, IsString } from 'class-validator'

export class TimeblockDto {
	@IsString()
	name: string

	@IsOptional()
	@IsString()
	color?: string

	@IsNumber()
	duration: number

	@IsNumber()
	@IsOptional()
	order?: number
}
