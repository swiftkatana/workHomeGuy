import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ThrottlerModule } from '@nestjs/throttler'
import { APP_GUARD } from '@nestjs/core'
import { MongooseModule } from '@nestjs/mongoose'
import { EmployeeModule } from './routes/employee/employee.module'
import { EmployeeController } from 'routes/employee/employee.controller'

@Module({
	imports: [
		MongooseModule.forRoot(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
		}),
		ConfigModule.forRoot(),
		ThrottlerModule.forRoot({
			ttl: 60,
			limit: 10,
		}),
		EmployeeModule,
	],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply().forRoutes(EmployeeController)
	}
}
