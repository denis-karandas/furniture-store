import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserStore } from 'stores';
import { PageLoader } from 'components';

export interface IAuthGuardProps {
    children: React.ReactNode;
}

const AuthGuard = ({ children }: IAuthGuardProps) => {
    const { user } = useUserStore();

    if (localStorage.getItem('authenticated')) {
        if (user) {
            return children;
        }
        return <PageLoader />;
    }
    
    if (user) {
        return children;
    }
    return <Navigate to="/sign-in" />;
}

export default AuthGuard;
