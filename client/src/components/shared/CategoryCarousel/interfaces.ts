import { ICategoryItemProps } from 'components/shared/CategoryItem/interfaces';

export interface ICategoryCarouselProps {
    title: string;
    categories: ICategoryItemProps[];
    isLoading?: boolean;
}
