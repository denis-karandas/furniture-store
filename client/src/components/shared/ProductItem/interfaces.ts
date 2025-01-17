import { IProductBadgeProps } from 'components/shared/ProductBadge/interfaces';

export type IProductItemProps = IProductItem & {
    onAddFavorite: (product_id: number) => void;
    onDeleteFavorite: (product_id: number) => void;
}

export interface IProductItem {
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
    isFavorite: boolean;
    badges: IProductBadgeProps[];
}
