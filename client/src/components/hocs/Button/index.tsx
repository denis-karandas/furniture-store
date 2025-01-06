import React, { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

import './Button.scss';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button = ({
    children = null,
    ...props
}: IButtonProps) => {
    const containerClassName = cn('button', props.className);

    return (
        <button
            {...props}
            className={containerClassName}
        >
            {children}
        </button>
    );
}

export default Button;
