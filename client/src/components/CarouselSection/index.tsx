import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import uniqid from 'uniqid';
import { Advantages } from 'components';
import { Button } from 'HOCs';
import ArrowIcon from 'assets/icons/arrow.svg';

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
                <Button buttonProps={{ className: `carousel-section__prev carousel-section-${uniqueId}__prev` }}>
                    <ArrowIcon />
                </Button>
                <Button buttonProps={{ className: `carousel-section__next carousel-section-${uniqueId}__next` }}>
                    <ArrowIcon />
                </Button>
                <div className={`carousel-section__dots carousel-section-${uniqueId}__dots`} />
            </div>
            <div className="carousel-section__advantages">
                <Advantages />
            </div>
        </div>
    );
}

export default CarouselSection;
