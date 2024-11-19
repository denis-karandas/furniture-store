import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ReviewItem } from 'components';
import { Button } from 'HOCs';
import { IReviewItemProps } from 'components/ReviewItem/interfaces';
import ArrowIcon from 'assets/icons/arrow.svg';

import './ReviewCarousel.scss';

const reviews = [
    {
        image: '/images/user-1.png',
        name: 'Kristin Watson',
        role: 'Fashion Designer',
        text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“',
    },
    {
        image: '/images/user-2.png',
        name: 'Esther Howard',
        role: 'Fashion Designer',
        text: 'Nullam sapien elit, dignissim eu viverra et, scelerisque et felis. Aliquam egestas dui elit, quis tincidunt lacus aliquam et. Duis nulla velit, dignissim ut odio ac, eleifend luctus leo. Ut ac imperdiet velit. Aliquam semper ex in volutpat rutrum. ',
    },
    {
        image: '/images/user-1.png',
        name: 'Kristin Watson',
        role: 'Fashion Designer',
        text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“',
    },
    {
        image: '/images/user-2.png',
        name: 'Esther Howard',
        role: 'Fashion Designer',
        text: 'Nullam sapien elit, dignissim eu viverra et, scelerisque et felis. Aliquam egestas dui elit, quis tincidunt lacus aliquam et. Duis nulla velit, dignissim ut odio ac, eleifend luctus leo. Ut ac imperdiet velit. Aliquam semper ex in volutpat rutrum. ',
    },
];

const ReviewCarousel = () => {
    const renderReview = (item: IReviewItemProps, index: number) => (
        <SwiperSlide key={index}>
            <ReviewItem {...item} />
        </SwiperSlide>
    );

    const renderReviews = () => reviews.map(renderReview);

    return (
        <div className="review-carousel">
            <div className="review-carousel__content">
                <div className="review-carousel__top">
                    <h2 className="review-carousel__title">What Client Says About Us</h2>
                    <div className="review-carousel__arrows">
                        <Button buttonProps={{ className: 'review-carousel__prev' }}>
                            <ArrowIcon />
                        </Button>
                        <Button buttonProps={{ className: 'review-carousel__next' }}>
                            <ArrowIcon />
                        </Button>
                    </div>
                </div>
                <Swiper
                    className="review-carousel__carousel"
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={2}
                    navigation={{ prevEl: '.review-carousel__prev', nextEl: '.review-carousel__next' }}
                >
                    {renderReviews()}
                </Swiper>
            </div>
        </div>
    );
}

export default ReviewCarousel;
