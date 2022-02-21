import { NestFactory } from '@nestjs/core'
import * as helmet from 'helmet'
import * as cookieParser from 'cookie-parser'
import { AppModule } from './app.module'
import OnlineUsers from 'class/OnlineUsers'
import { Logger } from '@nestjs/common'
import { AllExceptionsFilter } from 'filters/http-exception.filter'
async function bootstrap() {
	const logger: Logger = new Logger('Start server')
	const app = await NestFactory.create(AppModule)
	app.useGlobalFilters(new AllExceptionsFilter())
	app.use(helmet())
	app.use(cookieParser())

	const PORT = process.env.PORT || 1029
	await app.listen(PORT, () => {
		console.clear()
		logger.log(`server listening on ${PORT}`)
	})
}
bootstrap()
