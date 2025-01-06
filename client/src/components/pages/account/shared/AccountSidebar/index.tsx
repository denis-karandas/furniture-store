import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { AccountSidebarItemKey, IAccountSidebarItem, IAccountSidebarProps } from './interfaces';
import SquareListIcon from 'assets/icons/square-list.svg';
import CartIcon from 'assets/icons/cart-shopping.svg';
import HearthIcon from 'assets/icons/hearth-2.svg';
import MessageSquareIcon from 'assets/icons/message-square.svg';
import QuestionSquareIcon from 'assets/icons/question-square.svg';
import GearIcon from 'assets/icons/gear.svg';

import './AccountSidebar.scss';

const AccountSidebar = ({ items = [] }: IAccountSidebarProps) => {
    const { pathname } = useLocation();

    const renderItemIconByKey = (key: AccountSidebarItemKey): React.ReactNode => {
        switch (key) {
            case AccountSidebarItemKey.ORDERS:
                return <SquareListIcon className="account-sidebar__icon account-sidebar__icon_stroke" />;
            case AccountSidebarItemKey.CART:
                return <CartIcon className="account-sidebar__icon account-sidebar__icon_stroke" />;
            case AccountSidebarItemKey.FAVORITES:
                return <HearthIcon className="account-sidebar__icon account-sidebar__icon_stroke" />;
            case AccountSidebarItemKey.REVIEWS:
                return <MessageSquareIcon className="account-sidebar__icon account-sidebar__icon_stroke" />;
            case AccountSidebarItemKey.QUESTIONS:
                return <QuestionSquareIcon className="account-sidebar__icon account-sidebar__icon_fill" />;
            case AccountSidebarItemKey.SETTINGS:
                return <GearIcon className="account-sidebar__icon account-sidebar__icon_stroke" />;
            default:
                return <div style={{ width: 24, height: 24 }} />;
        }
    };

    const renderItem = ({ key, name, path }: IAccountSidebarItem): React.ReactNode => {
        const itemClassName = cn('account-sidebar__item', {
            'account-sidebar__item_active': pathname.startsWith(path),
        });

        return (
            <li key={key}>
                <NavLink to={path} className={itemClassName}>
                    {renderItemIconByKey(key)}
                    <span>{name}</span>
                </NavLink>
            </li>
        );
    };

    const renderItems = (): React.ReactNode[] => items.map(renderItem);



    return (
        <div className="account-sidebar">
            <div className="account-sidebar__user">

            </div>
            <ul className="account-sidebar__items">
                {renderItems()}
            </ul>
        </div>
    );
}

export default AccountSidebar;
