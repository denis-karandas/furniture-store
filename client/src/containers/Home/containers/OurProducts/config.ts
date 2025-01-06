import { IProductTab, OurProductsTab } from 'components/shared/OurProducts/interfaces';
import { IOurProductsState } from './interfaces';

export const initialState: IOurProductsState = {
    tab: OurProductsTab.ALL,
    tabs: {
        [OurProductsTab.ALL]: {
            data: [],
            isLoading: false,
            error: null,
        },
        [OurProductsTab.NEWEST]: {
            data: [],
            isLoading: false,
            error: null,
        },
        [OurProductsTab.TRENDING]: {
            data: [],
            isLoading: false,
            error: null,
        },
        [OurProductsTab.BEST_SELLERS]: {
            data: [],
            isLoading: false,
            error: null,
        },
        [OurProductsTab.FEATURED]: {
            data: [],
            isLoading: false,
            error: null,
        },
    },
};

export const tabs: IProductTab[] = [
    {
        key: OurProductsTab.ALL,
        name: 'All',
    },
    {
        key: OurProductsTab.NEWEST,
        name: 'Newest',
    },
    {
        key: OurProductsTab.TRENDING,
        name: 'Trending',
    },
    {
        key: OurProductsTab.BEST_SELLERS,
        name: 'Best Sellers',
    },
    {
        key: OurProductsTab.FEATURED,
        name: 'Featured',
    },
];
