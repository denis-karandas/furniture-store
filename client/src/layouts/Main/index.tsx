import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from 'components';
import { useUserStore } from 'store';

const MainLayout = () => {
    const { user } = useUserStore();

	useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
			<Header user={user} />
			<Outlet />
			<Footer />
		</>
    )
}

export default MainLayout;
