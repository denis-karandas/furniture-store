export interface IProductDetailsProps {
    className?: string;
    items?: IProductDetailsItem[];
}

export interface IProductDetailsItem {
    type: TProductDetailsType;
    value: string;
}

export type TProductDetailsType = 'text' | 'image';
