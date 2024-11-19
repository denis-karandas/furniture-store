import React from 'react';
import { Button } from 'HOCs';
import CartIcon from 'assets/icons/cart.svg';

import './CartButton.scss';

const CartButton = () => {
    const numberOfOrders = 2;

    const renderNumberOfOrders = () => (
        <div className="cart-button__number">{numberOfOrders}</div>
    );

    return (
        <Button>
            <div className="cart-button">
                <CartIcon />
                <span className="cart-button__label">Cart</span>
                {!!numberOfOrders && renderNumberOfOrders()}
            </div>
        </Button>
    );
}

export default CartButton;
