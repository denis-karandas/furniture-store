import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import uniqid from 'uniqid';
import { Advantages, ArrowButton } from 'components';

import './CarouselSection.scss';

interface ICarouselSectionProps {
    slides: React.ReactNode[];
}

const CarouselSection = ({ slides = [] }: ICarouselSectionProps) => {
    const [uniqueId] = useState<string>(uniqid());

    const renderSlides = () => {
        return slides.map((slide, index) => {
            return (
                <SwiperSlide key={index}>{slide}</SwiperSlide>
            );
        });
    };

    return (
        <div className="carousel-section">
            <div className="carousel-section__carousel">
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    speed={800}
                    navigation={{ prevEl: `.carousel-section-${uniqueId}__prev`, nextEl: `.carousel-section-${uniqueId}__next` }}
                    pagination={{ el: `.carousel-section-${uniqueId}__dots`, clickable: true }}
                    loop
                >
                    {renderSlides()}
                </Swiper>
                <ArrowButton
                    className={`carousel-section__prev carousel-section-${uniqueId}__prev`}
                    theme="white"
                    shape="circle"
                    size="large"
                />
                <ArrowButton
                    className={`carousel-section__next carousel-section-${uniqueId}__next`}
                    theme="white"
                    shape="circle"
                    size="large"
                />
                <div className={`carousel-section__dots carousel-section-${uniqueId}__dots`} />
            </div>
            <div className="carousel-section__advantages">
                <Advantages />
            </div>
        </div>
    );
}

export default CarouselSection;
