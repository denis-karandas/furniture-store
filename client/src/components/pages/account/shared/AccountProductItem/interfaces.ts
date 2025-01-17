import { IAccountMenuButtonOption } from 'components/pages/account/shared/AccountMenuButton/interfaces';

export interface IAccountProductItemProps {
    id: number;
    image: {
        url: string;
        placeholderUrl: string;
        alt: string;
    },
    name: string;
    price: number;
    currency: string;
    url: string;
    options?: IAccountMenuButtonOption[];
}