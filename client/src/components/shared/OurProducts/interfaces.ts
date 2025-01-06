import { IProductItemProps } from 'components/shared/ProductItem/interfaces';

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
    products: IProductItemProps[];
    setTab: (tab: OurProductsTab) => void;
}

export interface IProductTab {
    key: OurProductsTab;
    name: string;
}
