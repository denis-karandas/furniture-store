import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { navItems } from './config';
import { INavigationItem } from './interfaces';
import MenuIcon from 'assets/icons/menu.svg';

import './Navigation.scss';

const Navigation = () => {
    const { pathname } = useLocation();

    const renderNavItem = (item: INavigationItem) => {
        const itemClassName = cn({ 'navigation__item_active': item.path === pathname });

        return (
            <li
                key={item.name}
                className={itemClassName}
            >
                <NavLink to={item.path}>
                    {item.name}
                </NavLink>
            </li>
        );
    };

    const renderNavItems = () => navItems.map(renderNavItem);

    return (
        <nav className="navigation">
            <div className="navigation__button">
                <MenuIcon />
                <span>All Categories</span>
            </div>
            <ul className="navigation__items">
                {renderNavItems()}
            </ul>
        </nav>
    );
}

export default Navigation;
