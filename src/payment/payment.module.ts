import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserModel } from 'src/user/user.model';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Module({
  controllers: [PaymentController],
  imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: UserModel,
				schemaOptions: {
					collection: 'User',
				},
			},
		]),
	],
  providers: [PaymentService],
  //exports: [UserService],
  
})
export class PaymentModule {}
