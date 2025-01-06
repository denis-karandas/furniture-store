import React from 'react';
import { IProductReplyProps } from './interfaces';

import './ProductReply.scss';

const ProductReply = ({
    image,
    name,
    publishedAt,
    text,
}: IProductReplyProps) => {
    return (
        <div className="product-reply">
            <img
                className="product-reply__image"
                src={image}
                alt={name}
            />
            <div className="product-reply__content">
                <div className="product-reply__top">
                    <span className="product-reply__user">{name}</span>
                    <span className="product-reply__published">{publishedAt}</span>
                </div>
                <p className="product-reply__text">{text}</p>
            </div>
        </div>
    );
}

export default ProductReply;
