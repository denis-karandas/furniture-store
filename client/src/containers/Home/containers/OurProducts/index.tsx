import React, { useCallback, useEffect, useReducer } from 'react';
import { OurProducts as OurProductsComponents, BaseSection } from 'components';
import { IProductItemProps } from 'components/shared/ProductItem/interfaces';
import { OurProductsTab } from 'components/shared/OurProducts/interfaces';
import { fetchProducts } from 'api/products';
import { formatProductToComponentItem } from 'containers/Home/adapters';
import { initialState, tabs } from './config';
import { reducer } from './reducer';
import { OurProductsAction } from './interfaces';

const OurProducts = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchProductsHandler = useCallback((tab: OurProductsTab) => {
        dispatch({
            type: OurProductsAction.SET_IS_LOADING,
            payload: { tab, isLoading: true },
        });

        fetchProducts(8)
            .then(({ items }) => {
                dispatch({
                    type: OurProductsAction.SET_PRODUCTS,
                    payload: {
                        tab,
                        data: items.map(formatProductToComponentItem),
                    },
                });
            })
            .catch(error => {
                dispatch({
                    type: OurProductsAction.SET_ERROR,
                    payload: { tab, error },
                });
            })
            .finally(() => {
                dispatch({
                    type: OurProductsAction.SET_IS_LOADING,
                    payload: { tab, isLoading: false },
                });
            });
    }, [dispatch]);
    
    const setTabHandler = useCallback((tab: OurProductsTab) => {
        dispatch({ type: OurProductsAction.SET_TAB, payload: tab });

        const thereAreTabData = !!state.tabs[tab].data.length;
        if (!thereAreTabData) {
            fetchProductsHandler(tab);
        }
    }, [state, fetchProductsHandler, dispatch]);

    useEffect(() => {
        fetchProductsHandler(OurProductsTab.ALL);

        return () => {
            dispatch({ type: OurProductsAction.RESET });
        };
    }, [fetchProductsHandler, dispatch]);

    const getProductsByTab = (): IProductItemProps[] => {
        switch (state.tab) {
            case OurProductsTab.ALL:
                return state.tabs.all.data;
            case OurProductsTab.NEWEST:
                return state.tabs.newest.data;
            case OurProductsTab.TRENDING:
                return state.tabs.trending.data;
            case OurProductsTab.BEST_SELLERS:
                return state.tabs.best_sellers.data;
            case OurProductsTab.FEATURED:
                return state.tabs.featured.data;
            default:
                return [];
        }
    };

    return (
        <BaseSection className="mt-80">
            <OurProductsComponents
                tabs={tabs}
                activeTab={state.tab}
                products={getProductsByTab()}
                setTab={setTabHandler}
            />
        </BaseSection>
    );
}

export default OurProducts;
