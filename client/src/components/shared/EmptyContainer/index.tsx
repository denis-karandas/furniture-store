import React from 'react';
import { IEmptyContainerProps } from './interfaces';
import CubeIcon from 'assets/icons/cube.svg';

import './EmptyContainer.scss';

const EmptyContainerOverlay = ({
    text = 'No Items',
}: IEmptyContainerProps) => {
    return (
        <div className="empty-container">
            <CubeIcon className="empty-container__icon" />
            <span className="empty-container__label">{text}</span>
        </div>
    );
}

export default EmptyContainerOverlay;
