import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.schems';
import { Model } from 'mongoose'

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async createUser(createUserDto: CreateUserDto) {
        const saveUser = await this.userModel.create(createUserDto);
        return saveUser
    }
}
