import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AccountMenuButton } from 'components';
import { formatToString } from 'helpers/currency';
import { IAccountProductItemProps } from './interfaces';

import './AccountProductItem.scss';

const AccountProductItem = ({
    id,
    image,
    name,
    price,
    currency,
    options = [],
}: IAccountProductItemProps) => {
    return (
        <div className="account-product-item">
            <div className="account-product-item__image">
                <LazyLoadImage
                    src={image.url}
                    placeholderSrc={image.placeholderUrl}
                    alt={image.alt}
                    width={64}
                    height={64}
                />
            </div>
            <div className="account-product-item__info">
                <span className="account-product-item__name">{name}</span>
                <span className="account-product-item__price">{formatToString(price, currency)}</span>
            </div>
            <div className="account-product-item__options">
                <AccountMenuButton options={options} id={id} />
            </div>
        </div>
    );
}

export default AccountProductItem;
