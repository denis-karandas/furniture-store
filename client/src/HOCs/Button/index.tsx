import React from 'react';
import cn from 'classnames';

import './Button.scss';

export interface IButtonProps {
    children?: React.ReactNode;
    text?: string;
    icon?: React.ReactNode;
    gap?: number;
    buttonProps?: Partial<HTMLButtonElement>;
    onClick?: () => void;
}

const Button = ({
    children = null,
    text = '',
    icon = null,
    gap = 20,
    buttonProps = {},
    onClick,
}: IButtonProps) => {
    const renderContent = () => {
        if (icon && text) {
            return (
                <div
                    className="button__group"
                    style={{ gap }}
                >
                    {text}
                    {icon}
                </div>
            );
        }

        return text || icon;
    };

    const className = cn('button', buttonProps.className);

    return (
        <button
            {...buttonProps}
            className={className}
            onClick={onClick}
        >
            {children || renderContent()}
        </button>
    );
}

export default Button;
