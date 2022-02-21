import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type EmployeeDocument = Employees & Document

@Schema({ timestamps: true })
export class Employees {
	@Prop({ type: String, required: true })
	name: string
	@Prop()
	roles: string[]
}

export const EmployeeSchema = SchemaFactory.createForClass(Employees)
