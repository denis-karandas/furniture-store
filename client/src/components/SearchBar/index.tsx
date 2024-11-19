import React from 'react';
import { ISearchBarProps } from './interfaces';
import LensIcon from 'assets/icons/lens.svg';

import './SearchBar.scss';

const SearchBar = ({
    name,
    value = '',
    placeholder = '',
    onChange,
}: ISearchBarProps) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange ? e => onChange(e.target.value) : undefined}
            />
            <LensIcon className="search-bar__icon" />
        </div>
    );
}

export default SearchBar;
