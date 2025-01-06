import axios from 'axios';
import api, { BASE_URL } from 'api';
import { ICheckAuthResponse, ILoginRequest, ILoginResponse, ILogoutResponse, IRefreshResponse, IRegisterRequest, IRegisterResponse } from './interfaces';

export const login = async (body: ILoginRequest): Promise<ILoginResponse['data']> => {
    const { data } = await axios.post<ILoginRequest, ILoginResponse>(
        BASE_URL + '/auth/login',
        body,
        { withCredentials: true }
    );

    return data;
};

export const register = async (body: IRegisterRequest): Promise<IRegisterResponse['data']> => {
    const { data } = await axios.post<IRegisterRequest, IRegisterResponse>(
        BASE_URL + '/auth/register',
        body,
        { withCredentials: true }
    );

    return data;
};

export const logout = async (): Promise<ILogoutResponse['data']> => {
    const { data } = await axios.post<void, ILogoutResponse>(
        BASE_URL + '/auth/logout',
        null,
        { withCredentials: true }
    );

    return data;
};

export const refresh = async (): Promise<IRefreshResponse['data']> => {
    const { data } = await axios.post<void, IRefreshResponse>(
        BASE_URL + '/auth/refresh',
        null,
        { withCredentials: true }
    );

    return data;
};

export const checkAuth = (): Promise<ICheckAuthResponse> => {
    return api.get('/auth/user');
};
