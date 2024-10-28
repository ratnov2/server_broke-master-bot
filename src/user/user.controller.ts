import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	NotFoundException,
	Param,
	Post,
	Put,
	Query,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { User } from './decorators/user.decorator'
import { UserService } from './user.service'
import { Auth } from '../auth/decorators/auth.decorator'
import { UpdateDto } from './dto/update.dto'
import { IdValidationPipe } from '../pipes/id.validation.pipe'


@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('profile2')
	async getff() {
		return this.userService.getAll()
	}

	@Get('profile')
	// @Auth()
	async getProfile(@User('_id') _id: string) {
		return this.userService.byId(_id)
	}

	@UsePipes(new ValidationPipe())
	@Put('profile')
	@HttpCode(200)
	@Auth()
	async updateProfile(@User('_id') _id: string, @Body() data: {have_read:boolean}) {
		return this.userService.updateProfile(_id, data)
	}

	
}
