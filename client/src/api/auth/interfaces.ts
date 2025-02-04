export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export interface ILoginRequest {
    email: string;
    password: string;
}

export interface ILoginResponse {
    data: {
        user: IUser;
    };
}

export interface IRegisterRequest {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
}

export interface IRegisterResponse {
    data: {
        user: IUser;
    };
}

export interface ILogoutResponse {
    data: {
        message: string;
        statusCode: number;
    };
}

export interface IRefreshResponse {
    data: {
        user: IUser;
    };
}

export interface ICheckAuthResponse {
    user: IUser;
}
