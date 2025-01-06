import React from 'react';
import { IAdvantage } from './interfaces';
import BoxIcon from 'assets/icons/box.svg';
import DeliveryIcon from 'assets/icons/delivery-truck.svg';
import GreatSupportIcon from 'assets/icons/24-hours.svg';
import ShieldIcon from 'assets/icons/shield.svg';

import './Advantages.scss';

const advantages: IAdvantage[] = [
    {
        icon: <BoxIcon />,
        title: 'Discount',
        subtitle: 'Every week new sales',
    },
    {
        icon: <DeliveryIcon />,
        title: 'Free Delivery',
        subtitle: '100% Free for all orders',
    },
    {
        icon: <GreatSupportIcon />,
        title: 'Great Support 24/7',
        subtitle: 'We care your experiences',
    },
    {
        icon: <ShieldIcon />,
        title: 'Secure Payment',
        subtitle: '100% Secure Payment Method',
    },
];

const Advantages = () => {
    const renderItem = ({ icon, title, subtitle }: IAdvantage, index: number) => (
        <li key={index}>
            {icon}
            <div>
                <span className="advantages__title">{title}</span>
                <span className="advantages__subtitle">{subtitle}</span>
            </div>
        </li>
    );

    const renderItems = () => advantages.map(renderItem);

    return (
        <ul className="advantages">
            {renderItems()}
        </ul>
    );
}

export default Advantages;
