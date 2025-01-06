import React from 'react';
import cn from 'classnames';

import './ProductFilter.scss';

const ProductFilter = ({
    children,
    className,
    title,
}) => {
    const containerClassName = cn('product-filter', className);

    return (
        <div className={containerClassName}>
            <p className="product-filter__title">{title}</p>
            <div className="product-filter__content">
                {children}
            </div>
        </div>
    );
}

export default ProductFilter;
