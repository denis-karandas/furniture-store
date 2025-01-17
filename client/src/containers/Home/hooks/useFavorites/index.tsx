import { useCallback } from 'react';
import { addFavorite, deleteFavorite } from 'api/favorites';
import { useTopProductsStore, useRecentProductsStore, useOurProductsStore } from 'stores';
import { IUseFavoritesResponse } from './interfaces';

const useFavorites = (): IUseFavoritesResponse => {
    const { update: updateTopProduct } = useTopProductsStore();
    const { update: updateRecentProduct } = useRecentProductsStore();
    const { update: updateOurProduct } = useOurProductsStore();

    const onAddFavorite = useCallback(async (product_id: number): Promise<void> => {
        updateTopProduct(product_id, { isFavorite: true });
        updateOurProduct(product_id, { isFavorite: true });
        updateRecentProduct(product_id, { isFavorite: true });

        try {
            await addFavorite(product_id)
        }
        catch (err) {
            updateTopProduct(product_id, { isFavorite: false });
            updateOurProduct(product_id, { isFavorite: false });
            updateRecentProduct(product_id, { isFavorite: false });

            console.log(err);
        }
    }, [updateTopProduct, updateRecentProduct, updateOurProduct, addFavorite]);

    const onDeleteFavorite = useCallback(async (product_id: number): Promise<void> => {
        updateTopProduct(product_id, { isFavorite: false });
        updateOurProduct(product_id, { isFavorite: false });
        updateRecentProduct(product_id, { isFavorite: false });

        try {
            await deleteFavorite(product_id);
        }
        catch (err) {
            updateTopProduct(product_id, { isFavorite: true });
            updateOurProduct(product_id, { isFavorite: true });
            updateRecentProduct(product_id, { isFavorite: true });

            console.log(err);
        }
    }, [updateTopProduct, updateRecentProduct, updateOurProduct, deleteFavorite]);

    return {
        onAddFavorite,
        onDeleteFavorite,
    };
};

export default useFavorites;
