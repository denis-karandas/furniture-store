import { IProductBadgeProps } from "components/shared/ProductBadge/interfaces";

export interface IProductItemProps {
    id: number;
    image: {
        url: string;
        placeholderUrl: string;
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
