export interface IRatingProps {
    className?: string;
    value?: number;
    size?: RatingComponentSize;
    gap?: number;
}

export enum RatingComponentSize {
    SMALL = 'S',
    MEDIUM = 'M',
    EXTRA_LARGE = 'XL',
};