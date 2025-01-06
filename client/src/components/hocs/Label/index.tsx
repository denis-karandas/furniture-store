import React from 'react';
import cn from 'classnames';
import { TLabelPosition } from './interfaces';

import './Label.scss';

export interface ILabelProps {
    children?: React.ReactNode;
    htmlFor?: string;
    text?: string;
    gap?: number;
    position?: TLabelPosition;
    labelProps?: Partial<HTMLDivElement>;
}

const Label = ({
    children,
    htmlFor,
    text = '',
    gap = 10,
    position = 'top',
    labelProps = {},
}: ILabelProps) => {
    const getPositionClassName = () => {
        switch (position) {
            case 'top':
                return 'label__position_top';
            case 'bottom':
                return 'label__position_bottom';
            case 'left':
                return 'label__position_left';
            case 'right':
                return 'label__position_right';
            default:
                return null;
        }
    };

    const className = cn('label', getPositionClassName(), labelProps.className);

    return (
        <div className={className} style={{ gap }}>
            <label htmlFor={htmlFor}>{text}</label>
            {children}
        </div>
    );
}

export default Label;
