import React from 'react';
import { TopProducts, MainCarousel, OurProducts, RecentlyAdded, TopCategories, Reviews } from './containers';

const Home = () => {
    return (
        <main className="home-page pb-100">
            <MainCarousel />
            <TopProducts />
            <TopCategories />
            <OurProducts />
            <Reviews />
            <RecentlyAdded />
        </main>
    );
}

export default Home;
