import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { TaskService } from 'src/task/task.service'
import { UserController } from './user.controller'
import { UserService } from './user.service'

@Module({
	controllers: [UserController],
	providers: [UserService, PrismaService, TaskService]
})
export class UserModule {}
