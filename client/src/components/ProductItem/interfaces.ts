import { IProductBadgeProps } from "components/ProductBadge/interfaces";

export interface IProductItemProps {
    image: string;
    name: string;
    price: number;
    oldPrice: number;
    currency: 'USD';
    url: string;
    badges: IProductBadgeProps[];
}
