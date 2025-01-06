import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ProductBadge, Button } from 'components';
import { formatToString } from 'helpers/currency';
import { IProductItemProps } from './interfaces';
import { IProductBadgeProps } from 'components/shared/ProductBadge/interfaces';
import CartIcon from 'assets/icons/cart.svg';
import HeartIcon from 'assets/icons/heart.svg';

import './ProductItem.scss';


const ProductItem = ({
    image,
    name = '',
    price = 0,
    oldPrice = 0,
    currency = 'USD',
    url = '',
    badges = [],
}: IProductItemProps) => {
    const [inTheCart, setInTheCart] = useState<boolean>(false);

    const isOldPrice = oldPrice > 0;

    const renderOldPrice = () => (
        <span className="product-item__price_old">{formatToString(oldPrice, currency)}</span>
    );

    const renderBadge = (badge: IProductBadgeProps, index: number) => {
        return <ProductBadge key={index} {...badge} />;
    };
    
    const renderBadges = () => (
        <div className="product-item__badges">
            {badges.map(renderBadge)}
        </div>
    );

    const buttonClassName = cn('product-item__button', { 'product-item__button_active': inTheCart });

    return (
            <div className="product-item">
                <NavLink to={url} className="product-item__image">
                    <LazyLoadImage
                        src={image.url}
                        placeholderSrc={image.placeholderUrl}
                        alt={image.alt}
                        width={312}
                        height={312}
                        // effect="blur"
                    />
                    {badges.length > 0 && renderBadges()}
                </NavLink>
                <div className="product-item__info">
                    <NavLink to={url}>
                        <h3 className="product-item__name">{name}</h3>
                    </NavLink>
                    <div className="product-item__price">
                        <span className="product-item__price_new">{formatToString(price, currency)}</span>
                        {isOldPrice && renderOldPrice()}
                    </div>
                    <Button
                        className={buttonClassName}
                        onClick={() => setInTheCart(prevState => !prevState)}
                    >
                        <CartIcon />
                    </Button>
                </div>
                <Button className="product-item__favorite">
                    <HeartIcon />
                </Button>
            </div>
    );
}

export default ProductItem;
