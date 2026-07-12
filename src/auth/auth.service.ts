import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { User } from './user.dto';
import { ReturnUser } from './user.dto';
@Injectable()
export class AuthService {
    private users: User[] = [
        { name: 'shivanshu', email: 'shivanshu@gmail.com', password: 'shivanshu@123' },
        { name: 'himanshu', email: 'himanshu@gmail.com', password: 'himanshu@123' },
        { name: 'kishan', email: 'kishan@gmail.com', password: 'kishan@123' }
    ]

    async getUsers(): Promise<User[]> {
        const usrs = await this.users.filter((u) => u);
        if (usrs.length !== 0) {
            return usrs
        } else {
            throw new NotFoundException('Users Not Found');
        }
    }

   async getUser(email: string): Promise<ReturnUser> {
        const usr = await this.users.find((u) => u.email === email);
        if (usr === undefined) {
            throw new NotFoundException('User Not Found');
        } else {
            const userData: ReturnUser = {
                message: 'User Fetch Successfully',
                user: usr
            }
            return userData
        }
    }

    addUser(user: User): ReturnUser {
        const usrs = this.users.find((u) => u.email === user.email);
        if (usrs === undefined) {
            this.users.push(user)
            const userData: ReturnUser = {
                message: 'User Added Successfully',
                user: user
            }
            return userData
        } else {
            throw new NotFoundException('User Already Exists');
        }
    }

    deleteUser(user: User): any {
        const usr = this.users.findIndex((u) => u.email === user.email)
        if (usr === -1) {
            throw new NotFoundException('User Not Found');
        } else {
            this.users.splice(usr, 1)
            const userData: ReturnUser = {
                message: 'User Deleted Successfully',
                user: user
            }
            return userData
        }

    }

    async updateUser(param: string, user: User): Promise<ReturnUser> {
        const usr = await this.users.find((u) => u.email === param);
        if (usr === undefined) {
            throw new NotFoundException('user not found');
        } else {
            {
                usr.name = user.name,
                    usr.email = user.email,
                    usr.password = user.password
            }
            const userData: ReturnUser = {
                message: 'user updated successfully',
                user: usr
            }
            return userData
        }
    }


}
