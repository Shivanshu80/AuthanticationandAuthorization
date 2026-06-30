import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterUser, RegisterUserSchema } from './entities/registerUser.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: RegisterUser.name, schema: RegisterUserSchema }])],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule { }
