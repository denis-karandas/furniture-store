import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import uniqid from 'uniqid';
import { ArrowButton, ProductItem } from 'components';
import { IProductItemProps } from 'components/shared/ProductItem/interfaces';
import { IProductCarouselProps } from './interfaces';

import './ProductCarousel.scss';

const ProductCarousel = ({
    title = '',
    products = [],
}: IProductCarouselProps) => {
    const [uniqueId] = useState<string>(uniqid());

    const renderProduct = (item: IProductItemProps, index: number) => (
        <SwiperSlide
            key={index}
            className="product-carousel__item"
        >
            <ProductItem {...item} />
        </SwiperSlide>
    );

    const renderProducts = () => products.map(renderProduct);

    return (
        <div className="product-carousel">
            <div className="product-carousel__top">
                <h2 className="product-carousel__title">{title}</h2>
                <div className="product-carousel__arrows">
                    <ArrowButton
                        className={`product-carousel__prev product-carousel-${uniqueId}__prev`}
                        theme="blue-lagoon"
                        shape="circle"
                    />
                    <ArrowButton
                        className={`product-carousel__next product-carousel-${uniqueId}__next`}
                        theme="blue-lagoon"
                        shape="circle"
                    />
                </div>
            </div>
            <Swiper
                className="product-carousel__carousel"
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView={4}
                navigation={{ prevEl: `.product-carousel-${uniqueId}__prev`, nextEl: `.product-carousel-${uniqueId}__next` }}
            >
                {renderProducts()}
            </Swiper>
        </div>
    );
}

export default ProductCarousel;
