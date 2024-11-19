import React from 'react';
import { NavLink } from 'react-router-dom';
import { ICategoryItemProps } from './interfaces';

import './CategoryItem.scss';

const CategoryItem = ({
    image = '',
    name = '',
    totalProducts = 0,
    url = '',
}: ICategoryItemProps) => {
    return (
        <NavLink to={url}>
            <div className="category-item">
                <img src={image} className="category-item__image" alt={name} />
                <div className="category-item__bar">
                    <div className="category-item__info">
                        <h3 className="category-item__name">{name}</h3>
                        <span className="category-item__total-products">{totalProducts} Products</span>
                    </div>
                </div>
            </div>
        </NavLink>
    );
}

export default CategoryItem;
