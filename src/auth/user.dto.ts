class User {
    name!: string;
    email!: string;
    password!: string;
}

class ReturnUser {
    message!: string;
    user?: User;
}


export { User, ReturnUser };