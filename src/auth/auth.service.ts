import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { User } from './user.dto';

@Injectable()
export class AuthService {
    private users: User[] = [
        { name: 'shivanshu', email: 'shivanshu@gmail.com', password: 'shivanshu@123' },
        { name: 'himanshu', email: 'himanshu@gmail.com', password: 'himanshu@123' },
        { name: 'kishan', email: 'kishan@gmail.com', password: 'kishan@123' }
    ]

    getUsers(): User[] {
        const usrs = this.users.map((u) => u);
        return usrs
    }

    getUser(user: User): User[] {
        const usr = this.users.filter((u) => u.email === user.email)
        if (usr.length < 1) {
            throw new NotFoundException('user not found')
        } else {
            return usr
        }
    }

    addUser(user: User): any {
        const usrs = this.users.filter((u) => u.email === user.email);
        if (usrs.length !== 0) {
            throw new UnauthorizedException('user already exists');
        } else {
            this.users.push(user);
        }
        return {
            message: 'user add successfully',
            user: user
        }
    }

    deleteUser(user: User): any {
        const usr = this.users.filter((u) => u.email === user.email)
        if (usr.length !== 0) {
            const indx = this.users.findIndex((u) => u.email === user.email)
            this.users.splice(indx, 1)
            return {
                message: 'user deleted successfully',
                user: usr
            }
        } else {
            throw new NotFoundException('user not found');
        }

    }

    updateUser(param: string, user: User): any {
        const usr = this.users.find((u) => u.email === param);
        if (usr === undefined) {
            throw new NotFoundException('user not found');
        } else {
            if(!user.name || !user.email || !user.password){
                throw new UnauthorizedException('please enter all felids correctly');
            }
            { usr.name = user.name, usr.email = user.email, usr.password = user.password }
            const obj = {
                message: 'user updated successfully',
                user: usr
            }
            return obj
        }
    }


}
