import React from 'react';
import { CategoryCarousel } from 'components';
import { ICategoryItemProps } from 'components/CategoryItem/interfaces';

const categories: ICategoryItemProps[] = [
    {
        image: '/images/category-1.png',
        name: 'Wing Chair',
        totalProducts: 3584,
        url: '/category/wing-chair',
    },
    {
        image: '/images/category-2.png',
        name: 'Wooden Chair',
        totalProducts: 157,
        url: '/category/wing-chair',
    },
    {
        image: '/images/category-3.png',
        name: 'Desk Chair',
        totalProducts: 154,
        url: '/category/wing-chair',
    },
    {
        image: '/images/category-1.png',
        name: 'Wing Chair',
        totalProducts: 3584,
        url: '/category/wing-chair',
    },
    {
        image: '/images/category-2.png',
        name: 'Wooden Chair',
        totalProducts: 157,
        url: '/category/wing-chair',
    },
    {
        image: '/images/category-3.png',
        name: 'Desk Chair',
        totalProducts: 154,
        url: '/category/wing-chair',
    },
];

const TopCategories = () => {
    return (
        <section className="full-width-section mt-80">
            <CategoryCarousel
                title="Top Categories"
                categories={categories}
            />
        </section>
    );
}

export default TopCategories;
