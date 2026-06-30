import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterUserDto } from './dto/registerUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { RegisterUser } from './entities/registerUser.schema';
import { Model } from 'mongoose';
import { LoginUserDto } from './dto/loginUser.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
    constructor(@InjectModel(RegisterUser.name) private userModel: Model<RegisterUser>,
     private jwtService: JwtService) { }

    async createUser(createUserDto: RegisterUserDto) {
        try {
            const saveUser = await this.userModel.create(createUserDto);
            return {
                message: 'User Register Successfully',
                data: saveUser
            }
        } catch (error) {
            return {
                message: 'Error Occured While Saving User'
            }
        }
    }

    async loginUser(loginUserDto: LoginUserDto) {
        try {
            const findUser = await this.userModel.findOne({ email: loginUserDto.email });
            if (!findUser) {
                throw new UnauthorizedException();
            }
            const isPasswordValid = await bcrypt.compare(loginUserDto.password, findUser.password);
            if (!isPasswordValid) {
                throw new UnauthorizedException();
            }
            const payload = { sub: findUser._id, username: findUser.name };
            console.log('Payload:', payload); // Log the payload to check its structure
            return {
                  access_token: await this.jwtService.signAsync(payload),
            };
            // TODO: Generate a JWT and return it here
            // instead of the user object
        } catch (error) {
            throw new UnauthorizedException();
        }
    }

    async getAllUsers() {
        try {
            const allUsers = await this.userModel.find();
            if(!allUsers || allUsers.length === 0){
                return{
                    message:'User Not Found'
                }
            }
            return {
                message: 'All User Fetched Successfully',
                data: allUsers
            }
        } catch (error) {
            return {
                message: 'Error Occured While Fetching All Users'
            }
        }
    }
}

// async getUserById(id: string) {
//     try {
//         if(!id){
//             return{
//                 message:'User Not Found'
//             }
//         }
//         const user = await this.userModel.findById(id);
//         return {
//             message: 'User Fetched Successfully',
//             data: user
//         }
//     } catch (error) {
//         return {
//             message: 'Error Occured While Fetching User'
//         }
//     }
// }

// async updateUser(id: string, createUserDto: CreateUserDto) {
//     try {
//         if(!id){
//             return{
//                 message:'User Not Found'
//             }
//         }
//         const updateUser = await this.userModel.findByIdAndUpdate(id, createUserDto);
//         return {
//             message: 'User Updated Successfully',
//             data: updateUser
//         }
//     } catch (error) {
//         return {
//             message: 'Error Occured While Updating User'
//         }
//     }
// }

// async deleteUser(id: string) {
//     try {
//         if(!id){
//             return{
//                 message:'User Not Found'
//             }
//         }
//         const deleteUser = await this.userModel.findByIdAndDelete(id);
//         return {
//             message: 'User Deleted Successfully',
//             data: deleteUser
//         }
//     } catch (error) {
//         return {
//             message: 'Error Occured While Deleting User'
//         }
//     }
// }

