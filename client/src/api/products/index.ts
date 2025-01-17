import api from 'api';
import { IFetchProductsRequest, IFetchProductsResponse } from './interfaces';

export const fetchProducts = async (
    limit: number = 10,
    page: number = 1,
): Promise<IFetchProductsResponse> => {
    const searchParams = new URLSearchParams({
        limit: limit.toString(),
        page: page.toString(),
    });

    return api.get<IFetchProductsRequest, IFetchProductsResponse>('/products?' + searchParams.toString());
};

export const fetchTopProducts = async (
    limit: number = 10,
    page: number = 1,
): Promise<IFetchProductsResponse> => {
    const searchParams = new URLSearchParams({
        limit: limit.toString(),
        page: page.toString(),
    });

    return api.get<IFetchProductsRequest, IFetchProductsResponse>('/products/top?' + searchParams.toString());
};

export const fetchRecentProducts = async (
    limit: number = 10,
    page: number = 1,
): Promise<IFetchProductsResponse> => {
    const searchParams = new URLSearchParams({
        limit: limit.toString(),
        page: page.toString(),
    });

    return api.get<IFetchProductsRequest, IFetchProductsResponse>('/products/recent?' + searchParams.toString());
};
