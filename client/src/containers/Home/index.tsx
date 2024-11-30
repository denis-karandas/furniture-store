import React from 'react';
import { TopProducts, MainCarousel, OurProducts, RecentlyAdded, TopCategories } from './containers';

const Home = () => {
    return (
        <main className="home-page pb-100">
            <MainCarousel />
            <TopProducts />
            <TopCategories />
            <OurProducts />
            <RecentlyAdded />
        </main>
    );
}

export default Home;
