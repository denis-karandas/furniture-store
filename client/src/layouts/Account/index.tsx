import { Header } from 'components';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useUserStore } from 'store';

const AccountLayout = () => {
    const { user } = useUserStore();

    return (
        <>
            <Header user={user} />
            <Outlet />
        </>
    );
}

export default AccountLayout;
