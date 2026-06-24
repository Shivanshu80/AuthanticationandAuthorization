import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.schems';
import { Model } from 'mongoose'

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async createUser(createUserDto: CreateUserDto) {
        try {
            const saveUser = await this.userModel.create(createUserDto);
            return {
                message: 'User Save Successfully',
                data: saveUser
            }
        } catch (error) {
            return {
                message: 'Error Occured While Saving User',
                error: error.message
            }
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
                message: 'Error Occured While Fetching All Users',
                error: error.message
            }
        }
    }

    async getUserById(id: string) {
        try {
            if(!id){
                return{
                    message:'User Not Found'
                }
            }
            const user = await this.userModel.findById(id);
            return {
                message: 'User Fetched Successfully',
                data: user
            }
        } catch (error) {
            return {
                message: 'Error Occured While Fetching User',
                error: error.message
            }
        }
    }

    async updateUser(id: string, createUserDto: CreateUserDto) {
        try {
            if(!id){
                return{
                    message:'User Not Found'
                }
            }
            const updateUser = await this.userModel.findByIdAndUpdate(id, createUserDto);
            return {
                message: 'User Updated Successfully',
                data: updateUser
            }
        } catch (error) {
            return {
                message: 'Error Occured While Updating User',
                error: error.message
            }
        }
    }

    async deleteUser(id: string) {
        try {
            if(!id){
                return{
                    message:'User Not Found'
                }
            }
            const deleteUser = await this.userModel.findByIdAndDelete(id);
            return {
                message: 'User Deleted Successfully',
                data: deleteUser
            }
        } catch (error) {
            return {
                message: 'Error Occured While Deleting User',
                error: error.message
            }
        }
    }
}
