import api from 'api';
import { ICheckAuthResponse, ISignInRequest, ISignInResponse, ISignUpRequest, ISignUpResponse } from './interfaces';

export const signIn = (data: ISignInRequest): Promise<ISignInResponse> => {
    return api.post<ISignInRequest, ISignInResponse>(
        '/auth/sign-in',
        data
    );
};

export const signUp = (data: ISignUpRequest): Promise<ISignUpResponse> => {
    return api.post<ISignUpRequest, ISignUpResponse>(
        '/auth/sign-up',
        data
    );
};

export const checkAuth = (): Promise<ICheckAuthResponse> => {
    return api.get('/auth/user');
};
