import { OurProductsTab } from 'components/shared/OurProducts/interfaces';

export enum OurProductsAction {
    SET_TAB = 'SET_TAB',
    SET_PRODUCTS = 'SET_PRODUCTS',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR',
    RESET = 'RESET',
}

export interface IOurProductsState {
    tab: OurProductsTab;
    tabs: {
        [OurProductsTab.ALL]: {
            data: any[];
            isLoading: boolean;
            error: any;
        },
        [OurProductsTab.NEWEST]: {
            data: any[];
            isLoading: boolean;
            error: any;
        },
        [OurProductsTab.TRENDING]: {
            data: any[];
            isLoading: boolean;
            error: any;
        },
        [OurProductsTab.BEST_SELLERS]: {
            data: any[];
            isLoading: boolean;
            error: any;
        },
        [OurProductsTab.FEATURED]: {
            data: any[];
            isLoading: boolean;
            error: any;
        },
    }
}

export interface IOurProductsAction {
    type: OurProductsAction;
    payload?: any;
}
