import { IProduct } from 'api/products/interfaces';
import { IProductItem } from 'components/shared/ProductItem/interfaces';

export const formatProductToComponentItem = (item: IProduct): IProductItem => {
    const image = item.product_images[0].image;
    const placeholder = item.product_images[0].placeholder_image;

    return {
        id: item.id,
        image: {
            url: process.env.API_URL + '/images/' + image.id + '/' + image.folder_name + '/' + image.file_name + '.' + image.file_extension,
            placeholderUrl: process.env.API_URL + '/images/' + placeholder.id + '/' + placeholder.folder_name + '/' + placeholder.file_name + '.' + placeholder.file_extension,
            alt: item.name,
        },
        name: item.name,
        price: item.product_price ? +item.product_price.price : 0,
        oldPrice: 0,
        currency: 'USD',
        url: '/product/' + item.slug,
        isFavorite: !!item.is_favorite,
        badges: [],
    };
};
