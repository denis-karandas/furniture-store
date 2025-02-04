import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CartButton, Logo, Navigation, SearchBar, Button } from 'components';
import { IHeaderProps } from './interfaces';
import { useDebounce } from 'hooks';
import HeartIcon from 'assets/icons/heart.svg';
import UserIcon from 'assets/icons/user.svg';

import './Header.scss';

const Header = ({ user }: IHeaderProps) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const debouncedSearchValue = useDebounce(searchValue, 500);

    const isUser = !!user;

    const renderCartButton = () => (
        <NavLink to="/account/cart">
            <CartButton />
        </NavLink>
    );

    const renderFavoritesButton = () => (
        <NavLink to="/account/favorites">
            <Button className="header__favorites">
                <HeartIcon stroke="#272343" />
            </Button>
        </NavLink>
    );

    const renderUserButton = () => (
        <NavLink to={isUser ? '/account' : '/sign-in'}>
            <Button className="header__user">
                <UserIcon stroke="#272343" />
            </Button>
        </NavLink>
    );

    return (
        <header className="header">
            <div className="header__top">
                <div className="header__content">
                    <Logo />
                    <SearchBar
                        name="search_bar"
                        placeholder="Search here..."
                        value={searchValue}
                        onChange={setSearchValue}
                    />
                    <div className="header__buttons">
                        {isUser && renderCartButton()}
                        {isUser && renderFavoritesButton()}
                        {renderUserButton()}
                    </div>
                </div>
            </div>
            <div className="header__bottom">
                <div className="header__content">
                    <Navigation />
                    <span className="header__contact">Contact: <a href="tel:(808) 555-0111">(808) 555-0111</a></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
