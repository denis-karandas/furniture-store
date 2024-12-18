import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import uniqid from 'uniqid';
import { CategoryItem } from 'components';
import { Button } from 'HOCs';
import { ICategoryItemProps } from 'components/CategoryItem/interfaces';
import { ICategoryCarouselProps } from './interfaces';
import ArrowIcon from 'assets/icons/arrow.svg';

import './CategoryCarousel.scss';

const CategoryCarousel = ({
    title = '',
    categories = [],
}: ICategoryCarouselProps) => {
    const [uniqueId] = useState<string>(uniqid());

    const renderCategory = (item: ICategoryItemProps, index: number) => (
        <SwiperSlide key={index} className="category-carousel__item">
            <div style={{ width: 424, height: 424 }}>
                <CategoryItem {...item} />
            </div>
        </SwiperSlide>
    );
    const renderCategories = () => categories.map(renderCategory);
    
    return (
        <div className="category-carousel">
            <div className="category-carousel__top">
                <h2 className="category-carousel__title">{title}</h2>
                <div className="category-carousel__arrows">
                    <Button buttonProps={{ className: `category-carousel__prev category-carousel-${uniqueId}__prev` }}>
                        <ArrowIcon />
                    </Button>
                    <Button buttonProps={{ className: `category-carousel__next category-carousel-${uniqueId}__next` }}>
                        <ArrowIcon />
                    </Button>
                </div>
            </div>
            <div className="category-carousel__bottom">
                <div className="category-carousel__wrapper">
                    <Swiper
                        className="category-carousel__carousel"
                        modules={[Navigation]}
                        spaceBetween={24}
                        slidesPerView={3}
                        navigation={{ prevEl: `.category-carousel-${uniqueId}__prev`, nextEl: `.category-carousel-${uniqueId}__next` }}
                    >
                        {renderCategories()}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default CategoryCarousel;
