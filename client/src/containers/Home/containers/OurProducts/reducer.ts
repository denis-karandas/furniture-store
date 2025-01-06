import { OurProductsTab } from 'components/shared/OurProducts/interfaces';
import { IOurProductsAction, IOurProductsState, OurProductsAction } from './interfaces';
import { initialState } from './config';

export const reducer = (state: IOurProductsState, action: IOurProductsAction) => {
    switch (action.type) {
        case OurProductsAction.SET_TAB: {
            return {
                ...state,
                tab: action.payload,
            };
        }
        case OurProductsAction.SET_PRODUCTS: {
            const tab = action.payload.tab as OurProductsTab;

            return {
                ...state,
                tabs: {
                    ...state.tabs,
                    [tab]: {
                        ...state.tabs[tab],
                        data: action.payload.data,
                    },
                },
            };
        }
        case OurProductsAction.SET_IS_LOADING: {
            const tab = action.payload.tab as OurProductsTab;

            return {
                ...state,
                tabs: {
                    ...state.tabs,
                    [tab]: {
                        ...state.tabs[tab],
                        isLoading: action.payload.isLoading,
                    },
                },
            };
        }
        case OurProductsAction.SET_ERROR: {
            const tab = action.payload.tab as OurProductsTab;

            return {
                ...state,
                tabs: {
                    ...state.tabs,
                    [tab]: {
                        ...state.tabs[tab],
                        error: action.payload.error,
                    },
                },
            };
        }
        case OurProductsAction.RESET: {
            return {
                ...initialState,
                tabs: {
                    ...initialState.tabs,
                    [OurProductsTab.ALL]: {
                        ...initialState.tabs[OurProductsTab.ALL],
                    },
                    [OurProductsTab.NEWEST]: {
                        ...initialState.tabs[OurProductsTab.NEWEST],
                    },
                    [OurProductsTab.TRENDING]: {
                        ...initialState.tabs[OurProductsTab.TRENDING],
                    },
                    [OurProductsTab.BEST_SELLERS]: {
                        ...initialState.tabs[OurProductsTab.BEST_SELLERS],
                    },
                    [OurProductsTab.FEATURED]: {
                        ...initialState.tabs[OurProductsTab.FEATURED],
                    },
                }
            };
        }
        default:
            return state;
    }
};
