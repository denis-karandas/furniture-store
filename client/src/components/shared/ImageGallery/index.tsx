import React, { useState } from 'react';
import { IImage, IImageGalleryProps } from './interfaces';
import { Modal } from 'components';

import './ImageGallery.scss';

const ImageGallery = ({ items = [] }: IImageGalleryProps) => {
    const [mainImage, setMainImage] = useState<IImage>(items[0]);
    const [{ isOpen }, setModal] = useState<{ isOpen: boolean; image: IImage | null; }>(
        { isOpen: false, image: null }
    );

    const openModal = (image: IImage) => {
        setModal({ isOpen: true, image });
    };

    const closeModal = () => {
        setModal(prevState => ({ ...prevState, isOpen: false }));
    };

    const renderMainImage = () => {
        return (
            <img
                key="main-image"
                className="image-gallery__image"
                src={mainImage.src}
                alt={mainImage.alt}
                onClick={() => openModal(mainImage)}
            />
        );
    };

    const renderImage = (image: IImage, index: number) => (
        <img
            key={index}
            className="image-gallery__item"
            src={image.src}
            alt={image.alt}
            onClick={() => setMainImage(image)}
        />
    );

    const renderMoreButton = () => {
        const remainder = items.length - 5;

        return (
            <div
                key="more"
                className="image-gallery__more"
            >
                +{remainder} more
            </div>
        );
    }

    const renderImages = () => {
        if (!items.length) {
            return;
        }

        if (items.length > 5) {
            return [...items.slice(1, 5).map(renderImage), renderMoreButton()];
        }

        return [...items.slice(1).map(renderImage)];
    };

    if (!items.length) {
        return;
    }

    return (
        <>
            <div className="image-gallery">
                {renderMainImage()}
                <div className="image-gallery__items">
                    {renderImages()}
                </div>
            </div>
            <Modal 
                isOpen={isOpen}
                onClose={closeModal}
            >
                Swiper
            </Modal>
        </>
    );
}

export default ImageGallery;
