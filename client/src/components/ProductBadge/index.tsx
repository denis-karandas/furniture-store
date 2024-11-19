import React from 'react';
import { BadgeType, IProductBadgeProps } from './interfaces';

import './ProductBadge.scss';

const ProductBadge = ({ type = BadgeType.NEW }: IProductBadgeProps) => {
    const getBackgroundColor = (): string | undefined => {
        switch (type) {
            case BadgeType.NEW:
                return '#01AD5A';
            case BadgeType.SALE:
                return '#F5813F';
            default:
                return undefined;
        }
    };

    const getText = (): string | undefined => {
        switch (type) {
            case BadgeType.NEW:
                return 'New';
            case BadgeType.SALE:
                return 'Sale';
            default:
                return undefined;
        }
    };

    return (
        <div
            className="product-badge"
            style={{ backgroundColor: getBackgroundColor() }}
        >
            {getText()}
        </div>
    );
}

export default ProductBadge;
