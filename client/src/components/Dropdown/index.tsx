import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { IDropdownOption, IDropdownProps } from './interfaces';
import ArrowIcon from 'assets/icons/arrow-2.svg';

import './Dropdown.scss';

const Dropdown = <T extends string | number>({
    className,
    options = [],
    value: initialValue,
}: IDropdownProps<T>) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [activeOption, setActiveOption] = useState<IDropdownOption<T> | undefined>(initialValue);

    const dropdownRef = useRef<any>(null);

    useEffect(() => {
        const callback = (e: MouseEvent) => {
            if (!dropdownRef.current.contains(e.target)) {
                setVisible(false);
            }
        };

        document.addEventListener('click', callback);

        return () => {
            document.removeEventListener('click', callback);
        };
    }, []);

    const renderOption = (item: IDropdownOption<T>) => {
        const optionClassName = cn('dropdown__option', {
            'dropdown__option_active': activeOption && item.value === activeOption.value,
        });

        const onClick = () => {
            setActiveOption(item);
            setVisible(false);
        };

        return (
            <li
                key={item.value}
                className={optionClassName}
                onClick={onClick}
            >
                {item.label}
            </li>
        );
    };

    const renderOptions = () => options.map(renderOption);

    const containerClassName = cn('dropdown', { 'dropdown_active': visible }, className);

    return (
        <div
            ref={dropdownRef}
            className={containerClassName}
        >
            <div
                type="text"
                className="dropdown__value"
                onClick={() => setVisible(prevState => !prevState)}
            >
                {activeOption ? activeOption.label : ''}
                <ArrowIcon className="dropdown__arrow" />
            </div>
            <ul className="dropdown__options">
                {renderOptions()}
            </ul>
        </div>
    );
}

export default Dropdown;
