import React, { useEffect, useState } from 'react';
import { deleteFavorite, fetchFavorites } from 'api/favorites';
import { AccountFavoritesPage } from 'components';
import { formatProductToComponentItem } from './adapters';
import { IAccountProductItemProps } from 'components/pages/account/shared/AccountProductItem/interfaces';
import { IAccountMenuButtonOption } from 'components/pages/account/shared/AccountMenuButton/interfaces';

const AccountFavorites = () => {
    const [products, setProducts] = useState<IAccountProductItemProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const asyncFunc = async () => {
            try {
                const { items } = await fetchFavorites(20);
                
                setProducts(items.map(formatProductToComponentItem));
            }
            catch (err) {}
        };

        asyncFunc();
    }, []);

     const getOptions = (item: IAccountProductItemProps): IAccountMenuButtonOption[] => {
        return [
            {
                value: 'remove',
                label: 'Remove',
                textColor: '#d61818',
                onClick: async () => {
                    try {
                        await deleteFavorite(item.id);
                        setProducts(prevState => prevState.filter(product => product.id !== item.id));
                    }
                    catch (err) {
                        console.log(err);
                    }

                },
            },
        ];
    };

    return (
        <AccountFavoritesPage
            products={products}
            isLoading={isLoading}
            getOptions={getOptions}
        />
    );
}

export default AccountFavorites;
