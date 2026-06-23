import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { UserRole } from '../enum/user-role.enum';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
    name!: string;
    @Prop()
    email!: string;
    @Prop()
    password!: string;
    @Prop({default:UserRole.STUDENT})
    role!: string
}

export const UserSchema = SchemaFactory.createForClass(User);