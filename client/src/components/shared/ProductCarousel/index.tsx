import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Skeleton from 'react-loading-skeleton';
import uniqid from 'uniqid';
import { IProductItem } from 'components/shared/ProductItem/interfaces';
import { ArrowButton, ProductItem, EmptyContainer } from 'components';
import { IProductCarouselProps } from './interfaces';

import './ProductCarousel.scss';

const ProductCarousel = ({
    title = '',
    products = [],
    isLoading = false,
    onAddFavorite,
    onDeleteFavorite,
}: IProductCarouselProps) => {
    const [uniqueId] = useState<string>(uniqid());

    const renderProduct = (item: IProductItem): React.ReactNode => (
        <SwiperSlide
            key={item.id}
            className="product-carousel__item"
        >
            <ProductItem
                {...item}
                onAddFavorite={onAddFavorite}
                onDeleteFavorite={onDeleteFavorite}
            />
        </SwiperSlide>
    );

    const renderSkeletonItem = (index: number) => (
        <SwiperSlide
            key={`skeleton-item-${index}`}
            className="product-carousel__item"
        >
            <Skeleton width={312} height={374} />
        </SwiperSlide>
    );

    const renderProducts = (): React.ReactNode[] => products.map(renderProduct);

    const renderSwiper = () => {
        if (isLoading || products.length) {
            return (
                <Swiper
                    className="product-carousel__carousel"
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={4}
                    navigation={{ prevEl: `.product-carousel-${uniqueId}__prev`, nextEl: `.product-carousel-${uniqueId}__next` }}
                >
                    {
                        isLoading 
                            ? [...Array(4).keys()].map(renderSkeletonItem)
                            : renderProducts()
                    }
                </Swiper>
            );
        }

        return (
            <div className="product-carousel__empty">
                <EmptyContainer text="No Products" />
            </div>
        );
    };

    return (
        <div className="product-carousel">
            <div className="product-carousel__top">
                <h2 className="product-carousel__title">{title}</h2>
                <div className="product-carousel__arrows">
                    <ArrowButton
                        className={`product-carousel__prev product-carousel-${uniqueId}__prev`}
                        theme="blue-lagoon"
                        shape="circle"
                        disabled={isLoading || !products.length}
                    />
                    <ArrowButton
                        className={`product-carousel__next product-carousel-${uniqueId}__next`}
                        theme="blue-lagoon"
                        shape="circle"
                        disabled={isLoading || !products.length}
                    />
                </div> 
            </div>
            {renderSwiper()}
        </div>
    );
}

export default ProductCarousel;
