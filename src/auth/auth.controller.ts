import { Controller, Get, Body, Post, Delete, Patch, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './user.dto';
import { ReturnUser } from './user.dto';

@Controller('api/auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Get('users')
   async getUsers(): Promise<User[]> {
        return await this.authService.getUsers();
    }

    @Get('user/:email')
   async getUser(@Param('email') email: string): Promise<ReturnUser>  {
        return await this.authService.getUser(email);
    }

    @Post('adduser')
    addUser(@Body() user: User): ReturnUser {
        return this.authService.addUser(user);
    }

    @Delete('deleteuser')
    deleteUser(@Body() user: User): any {
        return this.authService.deleteUser(user);
    }

    @Patch(':email')
    async updateUser(@Param('email') param: string, @Body() user: User): Promise<ReturnUser> {
        return await this.authService.updateUser(param, user);
    }


}
