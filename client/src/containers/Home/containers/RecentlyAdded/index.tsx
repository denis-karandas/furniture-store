import React from 'react';
import { ProductCarousel } from 'components';
import { BaseSection } from 'HOCs';
import { IProductItemProps } from 'components/ProductItem/interfaces';
import { BadgeType } from 'components/ProductBadge/interfaces';

const products: IProductItemProps[] = [
    {
        image: "/images/library-stool-chair.png",
        name: "Library Stool Chair",
        price: 20,
        oldPrice: 0,
        currency: 'USD',
        url: "/product/library-stool-chair",
        badges: [
            { type: BadgeType.NEW },
            { type: BadgeType.SALE },
        ],
    },
    {
        image: "/images/library-stool-chair-2.png",
        name: "Library Stool Chair",
        price: 20,
        oldPrice: 30,
        currency: 'USD',
        url: "/product/library-stool-chair",
        badges: [],
    },
    {
        image: "/images/library-stool-chair-3.png",
        name: "Library Stool Chair",
        price: 20,
        oldPrice: 0,
        currency: 'USD',
        url: "/product/library-stool-chair",
        badges: [],
    },
    {
        image: "/images/library-stool-chair-4.png",
        name: "Library Stool Chair",
        price: 20,
        oldPrice: 25,
        currency: 'USD',
        url: "/product/library-stool-chair",
        badges: [],
    },
    {
        image: "/images/library-stool-chair.png",
        name: "Library Stool Chair",
        price: 20,
        oldPrice: 0,
        currency: 'USD',
        url: "/product/library-stool-chair",
        badges: [],
    },
    {
        image: "/images/library-stool-chair-2.png",
        name: "Library Stool Chair",
        price: 20,
        oldPrice: 0,
        currency: 'USD',
        url: "/product/library-stool-chair",
        badges: [],
    },
    {
        image: "/images/library-stool-chair-3.png",
        name: "Library Stool Chair",
        price: 20,
        oldPrice: 0,
        currency: 'USD',
        url: "/product/library-stool-chair",
        badges: [],
    },
    {
        image: "/images/library-stool-chair-4.png",
        name: "Library Stool Chair",
        price: 20,
        oldPrice: 0,
        currency: 'USD',
        url: "/product/library-stool-chair",
        badges: [],
    },
];

const RecentlyAdded = () => {
    return (
        <BaseSection className="mt-80">
            <ProductCarousel
                title="Recently Added"
                products={products}
            />
        </BaseSection>
    );
}

export default RecentlyAdded;
