import { IProductReplyProps } from 'components/pages/product/ProductReply/interfaces';

export interface IProductMessageProps {
    id: number;
    image: string;
    name: string;
    publishedAt: string;
    rating: number;
    text: string;
    likes: number;
    dislikes: number;
    replies?: IProductReplyProps[];
    hideRating?: boolean;
}
