import { useEffect } from 'react';
import { useUserStore } from 'stores';
import { checkAuth } from 'api/auth';

const useAuth = () => {
    const { setUser } = useUserStore();

    useEffect(() => {
        const asyncFunc = async () => {
            try {
                const { user } = await checkAuth();

                if (user) {
                    setUser(user);
                }
            }
            catch (err) {}
        };
        
        if (localStorage.getItem('authenticated')) {
            asyncFunc();
        }
    }, [checkAuth, setUser]);
};

export default useAuth;
