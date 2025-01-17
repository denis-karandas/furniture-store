import React, { useEffect } from 'react';
import { ProductCarousel, BaseSection } from 'components';
import { fetchTopProducts } from 'api/products';
import { useTopProductsStore } from 'stores';
import { formatProductToComponentItem } from 'containers/Home/adapters';
import { useFavorites } from 'containers/Home/hooks';

const TopProducts = () => {
    const {
        data,
        isLoading,
        setProducts,
        setIsLoading,
        setError,
        reset,
    } = useTopProductsStore();

    const { onAddFavorite, onDeleteFavorite } = useFavorites();

    useEffect(() => {
        const asyncFunc = async () => {
            setIsLoading(true);

            try {
                const { items } = await fetchTopProducts(8);

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
        <BaseSection className="mt-60">
            <ProductCarousel
                title="Top Products"
                products={data}
                isLoading={isLoading}
                onAddFavorite={onAddFavorite}
                onDeleteFavorite={onDeleteFavorite}
            />
        </BaseSection>
    );
}

export default TopProducts;
