import { IProductItem } from 'components/shared/ProductItem/interfaces';

export interface IProductCarouselProps {
    title: string;
    products: IProductItem[];
    isLoading?: boolean;
    onAddFavorite: (product_id: number) => void;
    onDeleteFavorite: (product_id: number) => void;
}
