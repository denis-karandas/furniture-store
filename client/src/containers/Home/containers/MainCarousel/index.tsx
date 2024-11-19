import React from 'react';
import { BestFurniture, CarouselSection } from 'components';
import { WideCarouselSection } from 'HOCs';

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
