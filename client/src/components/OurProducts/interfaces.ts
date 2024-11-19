import { IProductItemProps } from 'components/ProductItem/interfaces';

export interface IOurProductsProps {
    products: IProductItemProps[];
}

export interface IProductCategory {
    key: string;
    name: string;
}
