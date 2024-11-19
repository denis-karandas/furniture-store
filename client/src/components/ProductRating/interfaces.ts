export interface IProductRatingProps {
    value: number;
    items: TProductRatingItem[];
}

export type TProductRatingItem = [number, number];