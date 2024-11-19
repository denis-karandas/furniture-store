import React from 'react';
import { FeaturedProducts, MainCarousel, OurProducts, RecentlyAdded, TopCategories } from './containers';

const Home = () => {
    return (
        <main className="home-page pb-100">
            <MainCarousel />
            <FeaturedProducts />
            <TopCategories />
            <OurProducts />
            <RecentlyAdded />
        </main>
    );
}

export default Home;
