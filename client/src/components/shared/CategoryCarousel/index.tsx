import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Skeleton from 'react-loading-skeleton';
import uniqid from 'uniqid';
import { ArrowButton, CategoryItem, EmptyContainer } from 'components';
import { ICategoryItemProps } from 'components/shared/CategoryItem/interfaces';
import { ICategoryCarouselProps } from './interfaces';

import './CategoryCarousel.scss';

const CategoryCarousel = ({
    title = '',
    categories = [],
    isLoading = false,
}: ICategoryCarouselProps) => {
    const [uniqueId] = useState<string>(uniqid());

    const renderCategory = (item: ICategoryItemProps, index: number) => (
        <SwiperSlide
            key={index}
            className="category-carousel__item"
        >
            <div style={{ width: 424, height: 424 }}>
                <CategoryItem {...item} />
            </div>
        </SwiperSlide>
    );

    const renderSkeletonItem = (index: number) => (
        <SwiperSlide
            key={index}
            className="category-carousel__item"
        >
            <Skeleton className="category-carousel__skeleton" />
        </SwiperSlide>
    );

    const renderCategories = () => categories.map(renderCategory);

    const renderSwiper = () => {
        if (isLoading || categories.length) {
            return (
                <div className="category-carousel__wrapper">
                    <Swiper
                        className="category-carousel__carousel"
                        modules={[Navigation]}
                        spaceBetween={24}
                        slidesPerView={3}
                        navigation={{ prevEl: `.category-carousel-${uniqueId}__prev`, nextEl: `.category-carousel-${uniqueId}__next` }}
                    >
                        {
                            isLoading 
                                ? [...Array(3).keys()].map(renderSkeletonItem)
                                : renderCategories()
                        }
                    </Swiper>
                </div>
            );
        }
        
        return (
            <div className="category-carousel__empty">
                <EmptyContainer text="No Categories" />
            </div>  
        );
    };
    
    return (
        <div className="category-carousel">
            <div className="category-carousel__top">
                <h2 className="category-carousel__title">{title}</h2>
                <div className="category-carousel__arrows">
                    <ArrowButton
                        className={`category-carousel__prev category-carousel-${uniqueId}__prev`}
                        theme="blue-lagoon"
                        shape="circle"
                    />
                    <ArrowButton
                        className={`category-carousel__next category-carousel-${uniqueId}__next`}
                        theme="blue-lagoon"
                        shape="circle"
                    />
                </div>
            </div>
            <div className="category-carousel__bottom">
                {renderSwiper()}
            </div>
        </div>
    );
}

export default CategoryCarousel;
