import { IProductBadgeProps } from "components/ProductBadge/interfaces";

export interface IProductItemProps {
    image: {
        url: string;
        alt: string;
    };
    placeholder?: string;
    name: string;
    price: number;
    oldPrice: number;
    currency: 'USD';
    url: string;
    badges: IProductBadgeProps[];
}
