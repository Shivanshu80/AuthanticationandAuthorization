import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.schems';
import { Model } from 'mongoose';
import { UserLoginDto } from '../user/dto/userlogin.dto';
import { UserLogin } from './entities/userlogin.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>,
        @InjectModel(UserLogin.name) private userLoginModel: Model<UserLogin>) { }

    async createUser(createUserDto: CreateUserDto) {
        try {
            const saveUser = await this.userModel.create(createUserDto);
            return {
                message: 'User Save Successfully',
                data: saveUser
            }
        } catch (error) {
            return {
                message: 'Error Occured While Saving User'
            }
        }
    }

    // async loginUser(loginUserDto: UserLoginDto) {
    //         try {
    //             const loginUser = await this.userLoginModel.find(loginUserDto)
    //             if(!loginUser){

    //             }
    //         return{
    //             message:'User Login Successfully'
    //         }
    //         } catch (error) {
    //             return{
    //                 message:'Error Occured While Login'
    //             }
    //         }
    // }

    // async getAllUsers() {
    //     try {
    //         const allUsers = await this.userModel.find();
    //         if(!allUsers || allUsers.length === 0){
    //             return{
    //                 message:'User Not Found'
    //             }
    //         }
    //         return {
    //             message: 'All User Fetched Successfully',
    //             data: allUsers
    //         }
    //     } catch (error) {
    //         return {
    //             message: 'Error Occured While Fetching All Users'
    //         }
    //     }
    // }

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
}
