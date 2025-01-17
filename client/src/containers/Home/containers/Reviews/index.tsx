import React, { useState } from 'react';
import { ReviewCarousel } from 'components';
import { IReviewItemProps } from 'components/shared/ReviewItem/interfaces';

const Reviews = () => {
    const [data, setData] = useState<IReviewItemProps[]>([
        {
            image: '/images/user-1.png',
            name: 'Kristin Watson',
            role: 'Fashion Designer',
            text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“',
        },
        {
            image: '/images/user-2.png',
            name: 'Esther Howard',
            role: 'Fashion Designer',
            text: 'Nullam sapien elit, dignissim eu viverra et, scelerisque et felis. Aliquam egestas dui elit, quis tincidunt lacus aliquam et. Duis nulla velit, dignissim ut odio ac, eleifend luctus leo. Ut ac imperdiet velit. Aliquam semper ex in volutpat rutrum. ',
        },
        {
            image: '/images/user-1.png',
            name: 'Kristin Watson',
            role: 'Fashion Designer',
            text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“',
        },
        {
            image: '/images/user-2.png',
            name: 'Esther Howard',
            role: 'Fashion Designer',
            text: 'Nullam sapien elit, dignissim eu viverra et, scelerisque et felis. Aliquam egestas dui elit, quis tincidunt lacus aliquam et. Duis nulla velit, dignissim ut odio ac, eleifend luctus leo. Ut ac imperdiet velit. Aliquam semper ex in volutpat rutrum. ',
        },
    ]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>();

    return (
        <div className="mt-80">
            <ReviewCarousel
                reviews={data}
                isLoading={isLoading}
            />
        </div>
    );
}

export default Reviews;
