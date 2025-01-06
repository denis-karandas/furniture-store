import React from 'react';
import cn from 'classnames';
import { IRatingProps, RatingComponentSize } from './interfaces';
import StarIcon from 'assets/icons/star.svg';

import './Rating.scss';

const Rating = ({
    className,
    value = 0,
    size = RatingComponentSize.MEDIUM,
    gap = 3,
}: IRatingProps) => {
    const renderStar = (_: number, index: number) => {
        const iconClassName = cn('rating__item', { 'rating__item_active': index + 1 <= Math.round(value) });

        return <StarIcon key={index} className={iconClassName} />;
    };

    const renderStars = () => [...Array(5).keys()].map(renderStar);

    const containerClassName = cn('rating', {
        'rating_small': size === RatingComponentSize.SMALL,
        'rating_medium': size === RatingComponentSize.MEDIUM,
        'rating_extra-large': size === RatingComponentSize.EXTRA_LARGE,
    }, className);

    return (
        <div className={containerClassName} style={{ gap }}>
            {renderStars()}
        </div>
    );
}

export default Rating;
