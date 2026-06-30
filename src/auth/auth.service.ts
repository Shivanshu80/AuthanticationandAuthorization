import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { RegisterUserDto } from '../user/dto/registerUser.dto';
import {LoginUserDto} from '../user/dto/loginUser.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) { }

    async createUser(registerUserDto: RegisterUserDto) {
        const saltOrRoundes= 10;
        const hashedPassword = await bcrypt.hash(registerUserDto.password, saltOrRoundes);
        return this.userService.createUser({...registerUserDto, password: hashedPassword});   
    }

    loginUser(loginUserDto:LoginUserDto ) {
        return this.userService.loginUser(loginUserDto);
    }

    getAllUsers() {
        return this.userService.getAllUsers();
    }

    // getUserById(id: string) {
    //     return this.userService.getUserById(id);
    // }

    // updateUser(id: string, createUserDto: CreateUserDto) {
    //     return this.userService.updateUser(id, createUserDto)
    // }

    // deleteUser(id: string) {
    //     return this.userService.deleteUser(id)
    // }
}
