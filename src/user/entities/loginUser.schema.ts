import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LoginUserDocument = HydratedDocument<LoginUser>;

@Schema()
export class LoginUser {
    @Prop({ required: true })
    email!: string;
    @Prop({ required: true })
    password!: string;
}

export const LoginUserSchema = SchemaFactory.createForClass(LoginUser);

