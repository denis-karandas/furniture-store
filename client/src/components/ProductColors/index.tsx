import React from 'react';
import cn from 'classnames';
import { IProductColor } from './interfaces';

import './ProductColors.scss';

const ProductColors = ({
    className = '',
    items = [],
    activeItem = null,
}) => {
    const renderColor = (item: IProductColor) => {
        const itemClassName = cn('product-colors__item', {
            'product-colors__item_active': activeItem && item.color === activeItem.color,
        });
        
        return (
            <li
                key={item.color}
                className={itemClassName}
                style={{ backgroundColor: item.color }}
            ></li>
        );
    };

    const renderColors = () => items.map(renderColor);

    const containerClassName = cn('product-colors', className);

    return (
        <ul className={containerClassName}>
            {renderColors()}
        </ul>
    );
}

export default ProductColors;
