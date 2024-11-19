import { ProductQuestionFilter } from './interfaces';

export const filterOptions = [
    {
        value: ProductQuestionFilter.NEWEST,
        label: 'Newest',
    },
    {
        value: ProductQuestionFilter.OLDEST,
        label: 'Oldest',
    },
    {
        value: ProductQuestionFilter.POPULAR,
        label: 'Popular',
    },
];
