import React, { useState } from 'react';
import cn from 'classnames';
import { ProductItem } from 'components';
import { IProductItemProps } from 'components/ProductItem/interfaces';
import { IOurProductsProps, IProductCategory } from './interfaces';
import { categories } from './config';

import './OurProducts.scss';

const OurProducts = ({ products = [] }: IOurProductsProps) => {
    const [category, setCategory] = useState('all');

    const renderCategory = ({ key, name }: IProductCategory) => {
        const categoryClassName = cn({ 'our-products__category_active': key === category });

        return (
            <li
                key={key}
                className={categoryClassName}
                onClick={() => setCategory(key)}
            >
                {name}
            </li>
        );
    };

    const renderCategories = () => categories.map(renderCategory);

    const renderProduct = (product: IProductItemProps, index: number) => (
        <li key={index}>
            <ProductItem {...product} />
        </li>
    );
    const renderProducts = () => products.map(renderProduct);

    return (
        <div className="our-products">
            <h2 className="our-products__title">Our Products</h2>
            <ul className="our-products__categories">
                {renderCategories()}
            </ul>
            <ul className="our-products__products">
                {renderProducts()}
            </ul>
        </div>
    );
}

export default OurProducts;
