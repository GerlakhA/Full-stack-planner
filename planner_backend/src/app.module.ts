import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { PrismaService } from './prisma.service'
import { TaskModule } from './task/task.module'
import { UserModule } from './user/user.module'
import { TimeBlockModule } from './time-block/time-block.module';
import { PomodoroModule } from './pomodoro/pomodoro.module';

@Module({
	imports: [AuthModule, ConfigModule.forRoot(), UserModule, TaskModule, TimeBlockModule, PomodoroModule],
	controllers: [AppController],
	providers: [AppService, PrismaService]
})
export class AppModule {}
