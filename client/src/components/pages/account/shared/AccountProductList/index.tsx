import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { AccountProductItem, EmptyContainer } from 'components';
import { IAccountProductItemProps } from 'components/pages/account/shared/AccountProductItem/interfaces';
import { IAccountProductListProps } from './interfaces';

import './AccountProductList.scss';

const AccountProductList = ({
    items = [],
    isLoading = false,
    getOptions,
}: IAccountProductListProps) => {
    const renderItem = (item: IAccountProductItemProps) => (
        <li
            key={item.id}
            className="account-product-list__item"
        >
            <AccountProductItem
                {...item}
                options={getOptions(item)}
            />
        </li>
    );

    const renderSkeletonItem = (index: number) => (
        <div
            key={`item-${index}`}
            className="account-product-list__item"
        >
            <Skeleton className="account-product-list__skeleton" />
        </div>
    );

    const renderItems = () => {
        if (isLoading) {
            return [...Array(5).keys()].map(renderSkeletonItem);
        }
        else if (items.length) {
            return items.map(renderItem);
        }
        return (
            <div className="account-product-list__empty">
                <EmptyContainer text="No Products" />
            </div>
        );
    };

    return (
        <ul className="account-product-list">
            {renderItems()}
        </ul>
    );
}

export default AccountProductList;
