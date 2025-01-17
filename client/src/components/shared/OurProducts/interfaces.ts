import { IProductItem } from 'components/shared/ProductItem/interfaces';

export enum OurProductsTab {
    ALL = 'all',
    NEWEST = 'newest',
    TRENDING = 'trending',
    BEST_SELLERS = 'best_sellers',
    FEATURED = 'featured',
}

export interface IOurProductsProps {
    tabs: IProductTab[];
    activeTab: OurProductsTab;
    products: IProductItem[];
    isLoading?: boolean;
    setTab: (tab: OurProductsTab) => void;
    onAddFavorite: (product_id: number) => void;
    onDeleteFavorite: (product_id: number) => void;
}

export interface IProductTab {
    key: OurProductsTab;
    name: string;
}
