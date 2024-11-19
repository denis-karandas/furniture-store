export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export interface ISignInRequest {
    email: string;
    password: string;
}

export interface ISignInResponse {
    accessToken: string;
    user: IUser;
}

export interface ISignUpRequest {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
}

export interface ISignUpResponse {
    accessToken: string;
    user: IUser;
}

export interface ICheckAuthResponse {
    user: IUser;
}
