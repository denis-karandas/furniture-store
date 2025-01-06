import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AccountContent, AccountSidebar, Header } from 'components';
import { useUserStore } from 'stores';
import { formatApiUserToHeaderUser } from './adapters';
import { sidebarItems } from './config';

const AccountLayout = () => {
    const { user } = useUserStore();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const headerUserProps = user ? formatApiUserToHeaderUser(user) : null;

    return (
        <>
            <Header user={headerUserProps} />
            <AccountContent>
                <AccountSidebar items={sidebarItems} />
                <Outlet />
            </AccountContent>
        </>
    );
}

export default AccountLayout;
