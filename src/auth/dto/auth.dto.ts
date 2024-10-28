import { prop } from '@typegoose/typegoose'
import { IsString, MinLength } from 'class-validator'

export class AuthDto {
	@IsString()
	email: string

	@MinLength(6, { message: 'Password cannot be less than 6 characters' })
	@IsString()
	password: string

	@IsString()
	firstName:string

	@IsString()
	@prop({ default: '' })
	lastName?:string

	@IsString()
	@prop({ default: '' })
	phone?:string
}
