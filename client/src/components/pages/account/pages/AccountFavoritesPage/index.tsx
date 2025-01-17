import React from 'react';
import { AccountProductList } from 'components';
import { IAccountFavoritesPageProps } from './interfaces';

import './AccountFavoritesPage.scss';

const AccountFavoritesPage = ({
    products = [],
    isLoading = false,
    getOptions,
}: IAccountFavoritesPageProps) => {
    return (
        <div className="account-favorites-page">
            <h2 className="account-favorites-page__title">Favorites</h2>
            <AccountProductList
                items={products}
                isLoading={isLoading}
                getOptions={getOptions}
            />
        </div>
    );
}

export default AccountFavoritesPage;
