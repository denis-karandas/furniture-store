import { IImage } from "api/images/interfaces";

export interface IProduct {
    id: number;
    name: string;
    slug: string;
    product_images: IProductImage[];
    product_price: IProductPrice;
    created_at: string;
    updated_at: string;
}

export interface IProductImage {
    id: number;
    order: number;
    image: IImage;
    placeholder_image: IImage;
}

export interface IProductPrice {
    id: number;
    price: string;
    created_at: string;
    updated_at: string;
}

export interface IFetchProductsRequest {
    page: number;
    limit: number;
}

export interface IFetchProductsResponse {
    items: IProduct[];
    meta: {
        currentPage: number;
        itemCount: number;
        itemsPerPage: number;
        totalItems: number;
        totalPages: number;
    };
}

