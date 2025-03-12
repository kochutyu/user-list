export type UserType = 'Admin' | 'Driver';

interface UniqId {
    id: number;
}

export interface IUser extends UniqId {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    user_type: UserType;
}

export interface IUserCreate extends IUser {
    password: string;
    repeatPassword: string;
}

export interface IUserEdit extends IUserCreate {
}

export interface IUserDelete extends UniqId {
}