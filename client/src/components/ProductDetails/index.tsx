import React from 'react';
import { IProductDetailsItem, IProductDetailsProps } from './interfaces';

import './ProductDetails.scss';

const ProductDetails = ({ items = [] }: IProductDetailsProps) => {
    const renderText = (item: IProductDetailsItem, index: number) => (
        <p key={index} className="product-details__text">{item.value}</p>
    );

    const renderImage = (item: IProductDetailsItem, index: number) => (
        <img key={index} src={item.value} className="product-details__image" />
    );

    const renderItem = (item: IProductDetailsItem, index: number) => {
        switch (item.type) {
            case 'text':
                return renderText(item, index);
            case 'image':
                return renderImage(item, index);
            default:
                return null;
        }
    };

    const renderDetails = () => items.map(renderItem);

    return (
        <div className="product-details">
            {renderDetails()}
        </div>
    );
}

export default ProductDetails;
