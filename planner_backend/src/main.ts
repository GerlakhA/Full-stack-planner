import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import { AppModule } from './app.module'
import { PrismaService } from './prisma.service'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.get(PrismaService)

	app.use(cookieParser())
	app.setGlobalPrefix('api')
	app.enableCors({
		origin: ['http://localhost:3000'],
		exposedHeaders: 'set-cookie',
		credentials: true
	})
	await app.listen(3333)
}
bootstrap()
