import React, { useCallback, useEffect } from 'react';
import { OurProducts as OurProductsComponents, BaseSection } from 'components';
import { OurProductsTab } from 'components/shared/OurProducts/interfaces';
import { fetchProducts } from 'api/products';
import { useOurProductsStore } from 'stores';
import { formatProductToComponentItem } from 'containers/Home/adapters';
import { useFavorites } from 'containers/Home/hooks';
import { tabs as tabOptions } from './config';

const OurProducts = () => {
    const {
        tab,
        data,
        isLoading,
        setTab,
        setProducts,
        setIsLoading,
        setError,
        reset,
    } = useOurProductsStore();

    const { onAddFavorite, onDeleteFavorite } = useFavorites();

    const fetchProductsHandler = useCallback(async (tab: OurProductsTab) => {
        setIsLoading(true);

        try {
            switch (tab) {
                case OurProductsTab.ALL: {
                    const { items } = await fetchProducts(8);

                    setProducts(items.map(formatProductToComponentItem));
                    break;
                }
                case OurProductsTab.NEWEST: {
                    const { items } = await fetchProducts(8);

                    setProducts(items.map(formatProductToComponentItem));
                    break;
                }
                case OurProductsTab.TRENDING: {
                    const { items } = await fetchProducts(8);

                    setProducts(items.map(formatProductToComponentItem));
                    break;
                }
                case OurProductsTab.BEST_SELLERS: {
                    const { items } = await fetchProducts(8);

                    setProducts(items.map(formatProductToComponentItem));
                    break;
                }
                case OurProductsTab.FEATURED: {
                    const { items } = await fetchProducts(8);

                    setProducts(items.map(formatProductToComponentItem));
                    break;
                }
                default: {
                    console.log('Unknown tab');
                }
            }
        }
        catch (err) {
            setError(err);
        }
        
        setIsLoading(false);
    }, [setProducts, setIsLoading, setError, fetchProducts, formatProductToComponentItem]);

    useEffect(() => {
        fetchProductsHandler(OurProductsTab.ALL);

        return () => {
            reset();
        };
    }, [fetchProductsHandler]);

    const setTabHandler = (tab: OurProductsTab) => {
        setTab(tab);
        fetchProductsHandler(tab);
    };

    return (
        <BaseSection className="mt-80">
            <OurProductsComponents
                tabs={tabOptions}
                activeTab={tab}
                products={data}
                isLoading={isLoading}
                setTab={setTabHandler}
                onAddFavorite={onAddFavorite}
                onDeleteFavorite={onDeleteFavorite}
            />
        </BaseSection>
    );
}

export default OurProducts;
