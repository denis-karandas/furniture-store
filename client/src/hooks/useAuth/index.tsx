import { useEffect } from 'react';
import { useUserStore } from 'store';

const useAuth = () => {
    const { checkAuth } = useUserStore();

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            checkAuth();
        }
    }, [checkAuth]);
};

export default useAuth;
