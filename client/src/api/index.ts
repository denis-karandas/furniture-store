import axios from 'axios';
import { refresh } from './auth';

export const BASE_URL = 'http://localhost:3001' as string;

const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

api.interceptors.response.use(
    response => response.data,
    async (error) => {
        const originalRequest = error.config;

        const error401 = error.response && error.response.status === 401;
        const retryWasNotPerformed = !originalRequest._isRetry;
        const userIsNotOnTheSignInPage = window.location.pathname !== '/sign-in';

        if (error401 && retryWasNotPerformed && userIsNotOnTheSignInPage) {
            originalRequest._isRetry = true;

            try {
                await refresh();
                localStorage.setItem('authenticated', '1');

                return api(originalRequest);
            }
            catch (refreshError) {
                localStorage.removeItem('authenticated');
                window.location.href = '/sign-in';

                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    },
);

export default api;
