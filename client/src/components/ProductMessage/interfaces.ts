import { IProductReplyProps } from 'components/ProductReply/interfaces';

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
