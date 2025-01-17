import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { IAccountMenuButtonProps, IAccountMenuButtonOption } from './interfaces';

import './AccountMenuButton.scss';

const AccountMenuButton = ({
    id,
    options = [],
}: IAccountMenuButtonProps) => {
    const [optionsListVisible, setOptionsListVisible] = useState<boolean>(false);
    const buttonRef = useRef<any>(null);

    useEffect(() => {
        const callback = (e: MouseEvent) => {
            if (!buttonRef.current.contains(e.target)) {
                setOptionsListVisible(false);
            }
        };

        document.addEventListener('click', callback);

        return () => {
            document.removeEventListener('click', callback);
        };
    }, []);

    const renderOption = (option: IAccountMenuButtonOption) => {
        const onClick = () => {
            option.onClick();
            setOptionsListVisible(false);
        };

        return (
            <li
                key={option.value}
                className="account-menu-button__option"
                style={{ color: option.textColor }}
                onClick={onClick}
            >
                {option.label}
            </li>
        );
    };

    const renderOptions = () => options.map(renderOption);

    const optionsListClassName = cn('account-menu-button__options', {
        'account-menu-button__options_active': optionsListVisible,
    });

    return (
        <div
            ref={buttonRef}
            className="account-menu-button"
        >
            <div
                className="account-menu-button__button"
                onClick={() => setOptionsListVisible(prevState => !prevState)}
            >
                <span />
            </div>
            <ul className={optionsListClassName}>
                {renderOptions()}
            </ul>
        </div>
    );
}

export default AccountMenuButton;
