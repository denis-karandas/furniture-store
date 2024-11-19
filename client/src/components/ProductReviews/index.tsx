import React from 'react';
import cn from 'classnames';
import { Dropdown, ProductMessage } from 'components';
import { Button } from 'HOCs';
import { IProductMessageProps } from 'components/ProductMessage/interfaces';
import { filterOptions } from './config';

import './ProductReviews.scss';

const ProductReviews = ({
    className = '',
    items = [],
}) => {
    const renderReview = (item: IProductMessageProps) => (
        <li key={item.id} className="product-reviews__item">
            <ProductMessage {...item} />
        </li>
    );

    const renderReviews = () => items.map(renderReview);

    const containerClassName = cn('product-reviews', className);

    return (
        <div className={containerClassName}>
            <div className="product-reviews__buttons">
                <Dropdown
                    className="product-reviews__date-filter"
                    options={filterOptions}
                    value={filterOptions[0]}
                />
                <Button
                    text="Write review"
                    buttonProps={{
                        className: 'product-reviews__new',
                    }}
                />
            </div>
            <ul className="product-reviews__list">
                {renderReviews()}
            </ul>
        </div>
    );
}

export default ProductReviews;
