import api from 'api';
import { IAddFavoriteProductRequest, IFetchFavoriteProductsRequest, IFetchFavoriteProductsResponse } from './interfaces';

export const fetchFavorites = async (
    limit: number = 10,
    page: number = 1,
): Promise<IFetchFavoriteProductsResponse> => {
    const searchParams = new URLSearchParams({
        limit: limit.toString(),
        page: page.toString(),
    });

    return api.get<IFetchFavoriteProductsRequest, IFetchFavoriteProductsResponse>('/favorites?' + searchParams.toString());
};

export const addFavorite = async (product_id: number): Promise<any> => {
    return api.post<IAddFavoriteProductRequest, any>('/favorites', { product_id });
};

export const deleteFavorite = async (product_id: number): Promise<any> => {
    return api.delete<IAddFavoriteProductRequest, any>('/favorites/' + product_id);
};
