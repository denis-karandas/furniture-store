import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Skeleton from 'react-loading-skeleton';
import uniqid from 'uniqid';
import { ArrowButton, ReviewItem, EmptyContainer } from 'components';
import { IReviewItemProps } from 'components/shared/ReviewItem/interfaces';
import { IRewiewCarouselProps } from './interfaces';

import './ReviewCarousel.scss';

const ReviewCarousel = ({
    reviews = [],
    isLoading = false,
}: IRewiewCarouselProps) => {
    const [uniqueId] = useState<string>(uniqid());

    const renderReview = (item: IReviewItemProps, index: number): React.ReactNode => (
        <SwiperSlide key={index}>
            <ReviewItem {...item} />
        </SwiperSlide>
    );

    const renderSkeletonItem = (index: number) => (
        <SwiperSlide key={index}>
            <Skeleton
                className="review-carousel__skeleton"
                baseColor="#FFFFFF"
            />
        </SwiperSlide>
    );

    const renderReviews = (): React.ReactNode[] => reviews.map(renderReview);

    const renderSwiper = (): React.ReactNode => {
        if (isLoading || reviews.length) {
            return (
                <Swiper
                    className="review-carousel__carousel"
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={2}
                    navigation={{ prevEl: `.review-carousel-${uniqueId}__prev`, nextEl: `.review-carousel-${uniqueId}__next` }}
                >
                    {
                        isLoading
                            ? [...Array(2).keys()].map(renderSkeletonItem)
                            : renderReviews()
                    }
                </Swiper>
            );
        }
      
        return (
            <div className="review-carousel__empty">
                <EmptyContainer text="No Reviews" />
            </div>
        );
    };

    return (
        <div className="review-carousel">
            <div className="review-carousel__content">
                <div className="review-carousel__top">
                    <h2 className="review-carousel__title">What Client Says About Us</h2>
                    <div className="review-carousel__arrows">
                        <ArrowButton
                            className={`review-carousel__prev review-carousel-${uniqueId}__prev`}
                            theme="blue-lagoon"
                            shape="circle"
                        />
                        <ArrowButton
                            className={`review-carousel__next review-carousel-${uniqueId}__next`}
                            theme="blue-lagoon"
                            shape="circle"
                        />
                    </div>
                </div>
                {renderSwiper()}
            </div>
        </div>
    );
}

export default ReviewCarousel;
