import React from 'react';

import './IconButton.scss';

export interface IIconButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const IconButton = ({ children, onClick }: IIconButtonProps) => {
    return (
        <button
            className="icon-button"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default IconButton;
