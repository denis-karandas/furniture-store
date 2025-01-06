import React from 'react';

import './AccountProductList.scss';

const AccountProductList = ({
    items = [],
}) => {
    const renderItem = ({}) => (
        <li>

        </li>
    );

    const renderItems = () => items.map(renderItem);

    return (
        <div className="account-product-list">
            {renderItems()}
        </div>
    );
}

export default AccountProductList;
