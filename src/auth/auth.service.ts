import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/user.dto';
import {UserLoginDto} from '../user/dto/userlogin.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) { }

    async createUser(createUserDto: CreateUserDto) {
        const saltOrRoundes= 10;
        const hashedPassword = await bcrypt.hash(createUserDto.password, saltOrRoundes);
        return this.userService.createUser({...createUserDto, password: hashedPassword});   
    }

    // loginUser(loginUserDto:UserLoginDto ) {
    //     return this.userService.loginUser(UserLoginDto);
    // }

    // getAllUsers() {
    //     return this.userService.getAllUsers();
    // }

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
