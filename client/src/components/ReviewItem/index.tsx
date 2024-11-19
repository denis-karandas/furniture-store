import React from 'react';
import { IReviewItemProps } from './interfaces';
import DoubleQuotesIcon from 'assets/icons/double_quotes.svg';

import './ReviewItem.scss';

const ReviewItem = ({
    text,
    image,
    name,
    role,
}: IReviewItemProps) => {
    return (
        <div className="review-item">
            <p className="review-item__text">{text}</p>
            <div className="review-item__user">
                <img
                    src={image}
                    alt={name}
                    className="review-item__image"
                />
                <span className="review-item__name">{name}</span>
                <span className="review-item__role">{role}</span>
            </div>
            <DoubleQuotesIcon className="review-item__quotes" />
        </div>
    );
}

export default ReviewItem;
