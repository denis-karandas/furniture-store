import React, { useEffect } from 'react';
import { ProductCarousel, BaseSection } from 'components';
import { fetchRecentProducts } from 'api/products';
import { formatProductToComponentItem } from 'containers/Home/adapters';
import { useRecentProductsStore } from 'stores';
import { useFavorites } from 'containers/Home/hooks';

const RecentlyAdded = () => {
    const {
        data,
        isLoading,
        setProducts,
        setIsLoading,
        setError,
        reset,
    } = useRecentProductsStore();

    const { onAddFavorite, onDeleteFavorite } = useFavorites();

    useEffect(() => {
        const asyncFunc = async () => {
            setIsLoading(true);

            try {
                const { items } = await fetchRecentProducts(8);

                setProducts(items.map(formatProductToComponentItem));
            }
            catch (err) {
                setError(err);
            }

            setIsLoading(false);
        };

        asyncFunc();

        return () => {
            reset();
        };
    }, []);

    return (
        <BaseSection className="mt-80">
            <ProductCarousel
                title="Recently Added"
                products={data}
                isLoading={isLoading}
                onAddFavorite={onAddFavorite}
                onDeleteFavorite={onDeleteFavorite}
            />
        </BaseSection>
    );
}

export default RecentlyAdded;
