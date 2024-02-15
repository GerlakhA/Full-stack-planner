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
import { TaskDto } from './dto/task.dto'
import { TaskService } from './task.service'

@Controller('user/tasks')
export class TaskController {
	constructor(private readonly taskService: TaskService) {}

	@Auth()
	@Get()
	async getAll(@CurrentUser('id') userId: string) {
		return this.taskService.getAll(userId)
	}

	@UsePipes(new ValidationPipe())
	@Auth()
	@HttpCode(200)
	@Post()
	async create(@Body() dto: TaskDto, @CurrentUser('id') userId: string) {
		return this.taskService.create(dto, userId)
	}

	@UsePipes(new ValidationPipe())
	@Auth()
	@HttpCode(200)
	@Put(':id')
	async update(
		@Body() dto: TaskDto,
		@Param('id') id: string,
		@CurrentUser('id') userId: string
	) {
		return this.taskService.update(dto, id, userId)
	}

	@Auth()
	@HttpCode(200)
	@Delete(':id')
	async delete(@Param('id') id: string) {
		return this.taskService.delete(id)
	}
}
