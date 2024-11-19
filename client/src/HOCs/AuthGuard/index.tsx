import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserStore } from 'store';
import { PageLoader } from 'components';

export interface IAuthGuardProps {
    children: React.ReactNode;
}

const AuthGuard = ({ children }: IAuthGuardProps) => {
    const { user, error } = useUserStore();

    const userLoaded = user || error;

    if (localStorage.getItem('accessToken')) {
        if (userLoaded) {
            if (user) {
                return children;
            }
            return <Navigate to="/sign-in" />;
        }
        return <PageLoader />;
    }
    
    if (user) {
        return children;
    }
    return <Navigate to="/sign-in" />;
}

export default AuthGuard;
