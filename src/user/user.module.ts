import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.schems';
import { UserLogin, UserLoginSchema } from './entities/userlogin.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema },
  { name: UserLogin.name, schema: UserLoginSchema }])],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule { }
