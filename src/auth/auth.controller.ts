import { Controller, Get, Body, Post, Delete, Patch, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './user.dto'

@Controller('api/auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Get('users')
    getUsers(): User[] {
        return this.authService.getUsers();
    }

    @Get('user')
    getUser(@Body() user: User): User[] {
        return this.authService.getUser(user);
    }

    @Post('adduser')
    addUser(@Body() user: User): any {
        return this.authService.addUser(user);
    }

    @Delete('deleteuser')
    deleteUser(@Body() user: User): any {
        return this.authService.deleteUser(user);
    }

    @Patch(':email')
    updateUser(@Param('email') param: string, @Body() user: User): User {
        return this.authService.updateUser(param, user);
    }


}
