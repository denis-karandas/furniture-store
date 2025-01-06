import React from 'react';

import './WideCarouselSection.scss';

export interface IWideCarouselSectionProps {
    children: React.ReactNode;
}

const WideCarouselSection = ({ children }: IWideCarouselSectionProps) => {
    return (
        <section className="wide-carousel-section">
            {children}
        </section>
    );
}

export default WideCarouselSection;
