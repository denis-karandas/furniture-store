import { IProduct } from 'api/products/interfaces';

export interface IFetchFavoriteProductsRequest {
    page: number;
    limit: number;
}

export interface IFetchFavoriteProductsResponse {
    items: IProduct[];
    meta: {
        currentPage: number;
        itemCount: number;
        itemsPerPage: number;
        totalItems: number;
        totalPages: number;
    };
}

export interface IAddFavoriteProductRequest {
    product_id: number;
}

export interface IDeleteFavoriteProductRequest {
    product_id: number;
}
