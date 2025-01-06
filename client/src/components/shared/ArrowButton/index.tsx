import React, { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import { Button } from 'components';
import ArrowIcon from 'assets/icons/arrow.svg';

import './ArrowButton.scss';

export interface IArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    shape?: 'primary' | 'circle';
    size?: 'primary' | 'large';
    theme?: 'white' | 'blue-lagoon';
}

const ArrowButton = ({
    shape = 'primary',
    size = 'primary',
    theme = 'blue-lagoon',
    ...props
}: IArrowButtonProps) => {
    const containerClassName = cn(
        'arrow-button',
        `arrow-button__shape_${shape}`,
        `arrow-button__size_${size}`,
        `arrow-button__theme_${theme}`,
        props.className
    );

    return (
        <Button
            {...props}
            className={containerClassName}
        >
            <ArrowIcon />
        </Button>
    );
}

export default ArrowButton;
