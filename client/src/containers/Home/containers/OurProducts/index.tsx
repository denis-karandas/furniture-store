import React from 'react';
import { OurProducts as OurProductsComponents } from 'components';
import { BaseSection } from 'HOCs';
import { IProductItemProps } from 'components/ProductItem/interfaces';
import { BadgeType } from 'components/ProductBadge/interfaces';

const products: IProductItemProps[] = [
    {
        image: {
            url: "/images/library-stool-chair.png",
            alt: "Library Stool Chair",
        },
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
        image: {
            url: "/images/library-stool-chair-2.png",
            alt: "Library Stool Chair",
        },
        placeholder: "/images/library-stool-chair-2_placeholder.png",
        name: "Library Stool Chair",
        price: 20,
        oldPrice: 30,
        currency: 'USD',
        url: "/product/library-stool-chair",
        badges: [],
    },
    {
        image: {
            url: "/images/library-stool-chair-3.png",
            alt: "Library Stool Chair",
        },
        name: "Library Stool Chair",
        price: 20,
        oldPrice: 0,
        currency: 'USD',
        url: "/product/library-stool-chair",
        badges: [],
    },
    {
        image: {
            url: "/images/library-stool-chair-4.png",
            alt: "Library Stool Chair",
        },
        name: "Library Stool Chair",
        price: 20,
        oldPrice: 25,
        currency: 'USD',
        url: "/product/library-stool-chair",
        badges: [],
    },
    {
        image: {
            url: "/images/library-stool-chair.png",
            alt: "Library Stool Chair",
        },
        name: "Library Stool Chair",
        price: 20,
        oldPrice: 0,
        currency: 'USD',
        url: "/product/library-stool-chair",
        badges: [],
    },
       {
        image: {
            url: "/images/library-stool-chair-2.png",
            alt: "Library Stool Chair",
        },
        placeholder: "/images/library-stool-chair-2_placeholder.png",
        name: "Library Stool Chair",
        price: 20,
        oldPrice: 30,
        currency: 'USD',
        url: "/product/library-stool-chair",
        badges: [],
    },
    {
        image: {
            url: "/images/library-stool-chair-3.png",
            alt: "Library Stool Chair",
        },
        name: "Library Stool Chair",
        price: 20,
        oldPrice: 0,
        currency: 'USD',
        url: "/product/library-stool-chair",
        badges: [],
    },
    {
        image: {
            url: "/images/library-stool-chair-4.png",
            alt: "Library Stool Chair",
        },
        name: "Library Stool Chair",
        price: 20,
        oldPrice: 25,
        currency: 'USD',
        url: "/product/library-stool-chair",
        badges: [],
    },
];

const OurProducts = () => {
    return (
        <BaseSection className="mt-80">
            <OurProductsComponents products={products} />
        </BaseSection>
    );
}

export default OurProducts;
