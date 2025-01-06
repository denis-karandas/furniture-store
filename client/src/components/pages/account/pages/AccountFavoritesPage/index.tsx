import React from 'react';
import { AccountProductList } from 'components/pages/account/shared';

const AccountFavoritesPage = () => {
    return (
        <div className="account-favorites-page">
            <AccountProductList items={[]} />
        </div>
    );
}

export default AccountFavoritesPage;
