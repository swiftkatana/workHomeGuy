import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Attendances, AttendanceSchema } from 'schemas/attendance'
import { Employees, EmployeeSchema } from 'schemas/employee'
import { EmployeeController } from './employee.controller'
import { EmployeeService } from './employee.service'

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: Employees.name, schema: EmployeeSchema },
			{ name: Attendances.name, schema: AttendanceSchema },
		]),
	],
	controllers: [EmployeeController],
	providers: [EmployeeService],
})
export class EmployeeModule {}
