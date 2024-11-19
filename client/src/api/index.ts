import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001' as string,
});

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;

    return config;
});

api.interceptors.response.use(
    config => config.data,
    error => {
        if (error.response.status == 401) {
            localStorage.removeItem('accessToken');

            if (location.pathname !== '/sign-in') {
                location.replace('/sign-in');
            }
            return;
        }
        throw error;
    },
);

export default api;
