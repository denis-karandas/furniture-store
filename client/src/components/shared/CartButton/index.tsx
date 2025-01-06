import React, { ButtonHTMLAttributes } from 'react';
import { Button } from 'components';
import CartIcon from 'assets/icons/cart.svg';

import './CartButton.scss';

interface ICartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    numberOfOrders?: number;
}

const CartButton = ({
    numberOfOrders = 2,
    ...props
}: ICartButtonProps) => {
    const renderNumberOfOrders = () => (
        <div className="cart-button__number">{numberOfOrders}</div>
    );

    return (
        <Button {...props}>
            <div className="cart-button">
                <CartIcon />
                <span className="cart-button__label">Cart</span>
                {!!numberOfOrders && renderNumberOfOrders()}
            </div>
        </Button>
    );
}

export default CartButton;
