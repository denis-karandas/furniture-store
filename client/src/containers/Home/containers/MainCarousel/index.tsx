import React from 'react';
import { BestFurniture, CarouselSection, WideCarouselSection } from 'components';

const MainCarousel = () => {
    return (
        <WideCarouselSection>
            <CarouselSection
                slides={[<BestFurniture />, <BestFurniture />, <BestFurniture />]}
            />
        </WideCarouselSection>
    );
}

export default MainCarousel;
