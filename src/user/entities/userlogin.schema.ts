import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserLoginDocument = HydratedDocument<UserLogin>;

@Schema()
export class UserLogin {
    @Prop({ requird: true })
    email!: string;
    @Prop({ requird: true })
    password!: string;
}

export const UserLoginSchema = SchemaFactory.createForClass(UserLogin);

