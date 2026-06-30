import { IsString, IsEmail } from 'class-validator'

export class RegisterUserDto {
    @IsString()
    name!: string;
    @IsEmail()
    email!: string;
    @IsString()
    password!: string;
}