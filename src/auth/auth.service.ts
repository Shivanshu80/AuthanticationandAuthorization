import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/user.dto';

@Injectable()
export class AuthService {
    constructor(private readonly userService:UserService){}
    
    createUser(createUserDto:CreateUserDto){
        return this.userService.createUser(createUserDto);
    }
}
