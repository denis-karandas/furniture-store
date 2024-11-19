import React from 'react';
import { Button } from 'HOCs';
import ArrowIcon from 'assets/icons/arrow.svg';

import './BestFurniture.scss';

const BestFurniture = () => {
    return (
        <div className="best-furniture">
            <div className="best-furniture__left">
                <span>WELCOME TO COMFORTY</span>
                <h1>Best Furniture Collection For Your Interior.</h1>
                <Button
                    buttonProps={{ className: 'best-furniture__button' }}
                    text="Shop Now"
                    icon={<ArrowIcon className="best-furniture__arrow" />}
                />
            </div>
            <div className="best-furniture__right">
                <img
                    src="/images/chair.png"
                    className="best-furniture__chair"
                />
                <img
                    src="/images/50-percent-discount.png"
                    className="best-furniture__discount"
                />
            </div>
        </div>
    );
}

export default BestFurniture;
