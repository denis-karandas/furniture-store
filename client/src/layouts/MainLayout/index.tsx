import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from 'components';
import { useUserStore } from 'stores';
import { formatApiUserToHeaderUser } from './adapters';

const MainLayout = () => {
    const { user } = useUserStore();

	useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const headerUserProps = user ? formatApiUserToHeaderUser(user) : null;

    return (
        <>
			<Header user={headerUserProps} />
			<Outlet />
			<Footer />
		</>
    )
}

export default MainLayout;
