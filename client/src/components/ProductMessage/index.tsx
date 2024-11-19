import React from 'react';
import cn from 'classnames';
import { Rating, ProductReply } from 'components';

import { IProductMessageProps } from './interfaces';
import { IProductReplyProps } from 'components/ProductReply/interfaces';
import { RatingComponentSize } from 'components/Rating/interfaces';
import LikeIcon from 'assets/icons/like.svg';

import './ProductMessage.scss';

const ProductMessage = ({
    image,
    name,
    publishedAt,
    rating,
    text,
    likes,
    dislikes,
    replies = [],
    hideRating = false,
}: IProductMessageProps) => {
    const renderRating = () => (
        <Rating
            className="product-message__rating"
            value={rating}
            size={RatingComponentSize.SMALL}
        />
    );

    const renderReply = (item: IProductReplyProps) => (
        <li key={item.id} className="product-message__reply">
            <ProductReply {...item} />
        </li>
    );

    const renderReplies = () => replies.map(renderReply);

    const topContainerClassName = cn('product-message__top', {
        'product-message__top_extended': !hideRating,
    });

    return (
        <div className="product-message">
            <div className="product-message__review">
                <img
                    className="product-message__image"
                    src={image}
                    alt={name}
                />
                <div className="product-message__content">
                    <div className={topContainerClassName}>
                        <div className="product-message__info">
                            <span className="product-message__user">{name}</span>
                            <span className="product-message__published">{publishedAt}</span>
                        </div>
                        {!hideRating && renderRating()}
                    </div>
                    <p className="product-message__text">{text}</p>
                    <div className="product-message__bottom">
                        <span className="product-message__reply-button">Reply</span>
                        <div className="product-message__like">
                            <LikeIcon />
                            <span>{likes}</span>
                        </div>
                        <div className="product-message__dislike">
                            <LikeIcon />
                            <span>{dislikes}</span>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="product-message__replies">
                {renderReplies()}
            </ul>
        </div>
    );
}

export default ProductMessage;
