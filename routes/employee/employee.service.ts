import { rolesList } from 'config/roles'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { IClockInResponse, IGetEmployeeRolesResponse } from 'interface/employee'
import { Model } from 'mongoose'
import { EmployeeDocument, Employees } from 'schemas/employee'
import { AttendanceDocument, Attendances } from 'schemas/attendance'

@Injectable()
export class EmployeeService {
	constructor(
		@InjectModel(Employees.name)
		private EmployeeModule: Model<EmployeeDocument>,
		@InjectModel(Attendances.name)
		private AttendanceModule: Model<AttendanceDocument>
	) {}

	public async GetEmployeeList(): Promise<EmployeeDocument[]> {
		return await this.EmployeeModule.find()
	}

	private async GetEmployee(id: string): Promise<EmployeeDocument> {
		return await this.EmployeeModule.findById(id)
	}

	public async GetEmployeeRoles(
		employeeId: string
	): Promise<IGetEmployeeRolesResponse[]> {
		const employee = await this.GetEmployee(employeeId)
		return employee.roles.map(role => ({
			id: role,
			description: rolesList[role],
		}))
	}
	public async ClockIn(
		employeeId: string,
		roleId: string
	): Promise<IClockInResponse> {
		const employee = await this.GetEmployee(employeeId)
		if (!employee) throw new Error('Employee not found')
		if (!employee.roles.includes(roleId)) throw new Error('Role not found')
		return await this.AttendanceModule.create({
			employeeId,
			roleId,
			actionTime: new Date(),
		})
	}
}
