import React from 'react';
import { CategoryCarousel } from 'components';
import { ICategoryItemProps } from 'components/shared/CategoryItem/interfaces';

const categories: ICategoryItemProps[] = [
    {
        image: {
            url: '/images/category-1.png',
            alt: 'Wing Chair',
        },
        name: 'Wing Chair',
        totalProducts: 3584,
        url: '/category/wing-chair',
    },
    {
        image: {
            url: '/images/category-2.png',
            alt: 'Wing Chair',
        },
        name: 'Wooden Chair',
        totalProducts: 157,
        url: '/category/wing-chair',
    },
    {
        image: {
            url: '/images/category-3.png',
            alt: 'Wing Chair',
        },
        name: 'Desk Chair',
        totalProducts: 154,
        url: '/category/wing-chair',
    },
    {
        image: {
            url: '/images/category-1.png',
            alt: 'Wing Chair',
        },
        name: 'Wing Chair',
        totalProducts: 3584,
        url: '/category/wing-chair',
    },
    {
        image: {
            url: '/images/category-2.png',
            alt: 'Wing Chair',
        },
        name: 'Wooden Chair',
        totalProducts: 157,
        url: '/category/wing-chair',
    },
    {
        image: {
            url: '/images/category-3.png',
            alt: 'Wing Chair',
        },
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
                isLoading={false}
            />
        </section>
    );
}

export default TopCategories;
