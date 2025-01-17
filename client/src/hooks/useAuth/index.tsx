import { useEffect } from 'react';
import { useUserStore } from 'stores';
import { checkAuth } from 'api/auth';

const useAuth = () => {
    const { setUser, setIsLoading, setError, reset } = useUserStore();

    useEffect(() => {
        if (localStorage.getItem('authenticated')) {
            const asyncFunc = async () => {
                setIsLoading(true);
    
                try {
                    const { user } = await checkAuth();
    
                    setUser(user);
                }
                catch (err) {
                    setError(err);
                }
    
                setIsLoading(false);
            };

            asyncFunc();
        }

        return () => {
            reset();
        };
    }, [checkAuth, setUser, setIsLoading, setError, reset]);
};

export default useAuth;
