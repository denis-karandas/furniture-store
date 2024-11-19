import { IProductMessageProps } from 'components/ProductMessage/interfaces';

export interface IProductQuestionsProps {
    className?: string;
    items?: IProductMessageProps[];
}

export enum ProductQuestionFilter {
    NEWEST = 'NEWEST',
    OLDEST = 'OLDEST',
    POPULAR = 'POPULAR',
}