import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { ClockInDto } from 'dtos/employee'
import { EmployeeService } from './employee.service'

@Controller()
export class EmployeeController {
	constructor(private employeeService: EmployeeService) {}
	@Get('GetEmployeeList')
	async GetEmployeeList() {
		return {
			status: 'success',
			data: await this.employeeService.GetEmployeeList(),
		}
	}
	@Get('GetEmployeeRoles')
	async GetEmployeeRoles(@Query('employeeId') id) {
		return {
			status: 'success',
			data: await this.employeeService.GetEmployeeRoles(id),
		}
	}
	@Post('ClockIn')
	async ClockIn(@Body() body: ClockInDto) {
		return {
			status: 'success',
			data: await this.employeeService.ClockIn(body.employeeId, body.roleId),
		}
	}
}
