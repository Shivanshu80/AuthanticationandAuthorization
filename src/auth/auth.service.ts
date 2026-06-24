import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/user.dto';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) { }

    createUser(createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    getAllUsers() {
        return this.userService.getAllUsers();
    }

    getUserById(id: string) {
        return this.userService.getUserById(id);
    }

    updateUser(id: string, createUserDto: CreateUserDto) {
        return this.userService.updateUser(id, createUserDto)
    }

    deleteUser(id: string) {
        return this.userService.deleteUser(id)
    }
}
