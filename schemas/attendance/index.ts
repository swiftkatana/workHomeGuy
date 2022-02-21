import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type AttendanceDocument = Attendances & Document

@Schema({ timestamps: true })
export class Attendances {
	@Prop()
	employeeId: string
	@Prop()
	roleId: string
	@Prop()
	actionTime: Date
}

export const AttendanceSchema = SchemaFactory.createForClass(Attendances)
