import { Controller, Post, Body, Get, Param, Delete, Put, HttpCode, HttpStatus,
  UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from '../user/dto/registerUser.dto';
import { LoginUserDto } from '../user/dto/loginUser.dto';
import { AuthGuard } from './auth.guard';
@Controller('api/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('/register')
    createUser(@Body() registerUserDto: RegisterUserDto) {
        return this.authService.createUser(registerUserDto);
    }

    @HttpCode(HttpStatus.OK)
    @Post('/login')
    loginUser(@Body() loginUserDto: LoginUserDto) {
        return this.authService.loginUser(loginUserDto);
    }


     @UseGuards(AuthGuard)
    @Get('/users')
    getAllUsers(@Request() req) {
        return req.user
    }

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
