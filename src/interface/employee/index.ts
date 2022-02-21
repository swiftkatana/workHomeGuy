export interface IGetEmployeeRolesResponse {
	id: string
	description: string
}

export interface IClockInResponse {
	employeeId: string
	roleId: string
	actionTime: Date
}
