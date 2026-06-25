import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/user.dto';
import {UserLoginDto} from '../user/dto/userlogin.dto'

@Controller('api/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('/register')
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.authService.createUser(createUserDto);
    }

    // @Post('/login')
    // loginUser(@Body() userLoginDto:UserLoginDto ) {
    //     return this.authService.loginUser(userLoginDto);
    // }



    // @Get()
    // getAllUsers() {
    //     return this.authService.getAllUsers();
    // }

    // @Get(':id')
    // getUserById(@Param('id') id: string) {
    //     return this.authService.getUserById(id);
    // }

    // @Put(':id')
    // updateUser(@Param('id') id: string, @Body() createUserDto: CreateUserDto) {
    //     return this.authService.updateUser(id, createUserDto)
    // }

    // @Delete(':id')
    // deleteUser(@Param('id') id: string) {
    //     return this.authService.deleteUser(id)
    // }

}
