import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { Breadcrumbs, ImageGallery, Rating, ProductReviews, ProductQuestions, ProductDetails, ProductRating, ProductColors, Button, ProductFilter } from 'components';
import { TAB, tabName, tabs } from './config';
import CartIcon from 'assets/icons/cart.svg';
import HeartIcon from 'assets/icons/heart.svg';

import './ProductPage.scss';

const breadcrumbs = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Chairs',
        path: '/'
    },
    {
        name: 'Library Chair',
        path: '/'
    },
];

const images = [
    {
        src: '/images/library-stool-chair.png',
        alt: 'Library stool chair image'
    },
    {
        src: '/images/library-stool-chair-2.png',
        alt: 'Library stool chair image'
    },
    {
        src: '/images/library-stool-chair-3.png',
        alt: 'Library stool chair image'
    },
    {
        src: '/images/library-stool-chair-4.png',
        alt: 'Library stool chair image'
    },
    {
        src: '/images/library-stool-chair.png',
        alt: 'Library stool chair image'
    },
    {
        src: '/images/library-stool-chair.png',
        alt: 'Library stool chair image'
    },
    {
        src: '/images/library-stool-chair.png',
        alt: 'Library stool chair image'
    },
];

const product = {
    name: 'Library Stool Chair',
    rating: 4,
    price: 200,
    oldPrice: 300,
    currency: 'USD',
    colors: [
        {
            name: 'White 1',
            color: '#3a62f2',
        },
        {
            name: 'White 2',
            color: '#46ea51',
        },
        {
            name: 'White 3',
            color: '#ad762e',
        },
        {
            name: 'White 4',
            color: '#b750e0',
        },
        {
            name: 'White 5',
            color: '#f46464',
        },
    ],
    scores: [
        [5, 28],
        [4, 9],
        [3, 4],
        [2, 1],
        [1, 1],
    ],
    reviews: [
        {
            id: 1,
            image: '/images/user-1.png',
            name: 'Helen M.',
            publishedAt: 'Yesterday',
            rating: 3,
            text: 'Excellent running shoes. It turns very sharpely on the foot.',
            likes: 20,
            dislikes: 0,
            replies: [
                {
                    id: 1,
                    image: '/images/user-2.png',
                    name: 'Helen M.',
                    publishedAt: 'Yesterday',
                    text: 'Excellent running shoes. It turns very sharpely on the foot. Excellent running shoes. It turns very sharpely on the foot. Excellent running shoes. It turns very sharpely on the foot.  Excellent running shoes. It turns very sharpely on the foot.',
                },
                {
                    id: 2,
                    image: '/images/user-2.png',
                    name: 'Helen M.',
                    publishedAt: 'Yesterday',
                    text: 'Excellent running shoes. It turns very sharpely on the foot. Excellent running shoes. It turns very sharpely on the foot. Excellent running shoes. It turns very sharpely on the foot.  Excellent running shoes. It turns very sharpely on the foot.',
                },
            ],
        },
        {
            id: 2,
            image: '/images/user-2.png',
            name: 'Helen M.',
            publishedAt: 'Yesterday',
            rating: 5,
            text: 'Excellent running shoes. It turns very sharpely on the foot. Excellent running shoes. It turns very sharpely on the foot. Excellent running shoes. It turns very sharpely on the foot.  Excellent running shoes. It turns very sharpely on the foot.',
            likes: 5,
            dislikes: 2,
        },
        {
            id: 3,
            image: '/images/user-1.png',
            name: 'Helen M.',
            publishedAt: 'Yesterday',
            rating: 1,
            text: 'Excellent running shoes. It turns very sharpely on the foot.',
            likes: 12,
            dislikes: 0,
        },
        {
            id: 4,
            image: '/images/user-2.png',
            name: 'Helen M.',
            publishedAt: 'Yesterday',
            rating: 5,
            text: 'Excellent running shoes. It turns very sharpely on the foot. Excellent running shoes. It turns very sharpely on the foot.',
            likes: 0,
            dislikes: 0,
        },
    ],
    questions: [
        {
            id: 1,
            image: '/images/user-1.png',
            name: 'Helen M.',
            publishedAt: 'Yesterday',
            rating: 3,
            text: 'Excellent running shoes. It turns very sharpely on the foot.',
            likes: 20,
            dislikes: 0,
            replies: [
                {
                    id: 1,
                    image: '/images/user-2.png',
                    name: 'Helen M.',
                    publishedAt: 'Yesterday',
                    text: 'Excellent running shoes. It turns very sharpely on the foot. Excellent running shoes. It turns very sharpely on the foot. Excellent running shoes. It turns very sharpely on the foot.  Excellent running shoes. It turns very sharpely on the foot.',
                },
                {
                    id: 2,
                    image: '/images/user-2.png',
                    name: 'Helen M.',
                    publishedAt: 'Yesterday',
                    text: 'Excellent running shoes. It turns very sharpely on the foot. Excellent running shoes. It turns very sharpely on the foot. Excellent running shoes. It turns very sharpely on the foot.  Excellent running shoes. It turns very sharpely on the foot.',
                },
            ],
        },
        {
            id: 2,
            image: '/images/user-2.png',
            name: 'Helen M.',
            publishedAt: 'Yesterday',
            rating: 5,
            text: 'Excellent running shoes. It turns very sharpely on the foot. Excellent running shoes. It turns very sharpely on the foot. Excellent running shoes. It turns very sharpely on the foot.  Excellent running shoes. It turns very sharpely on the foot.',
            likes: 5,
            dislikes: 2,
            replies: [
                {
                    id: 1,
                    image: '/images/user-2.png',
                    name: 'Helen M.',
                    publishedAt: 'Yesterday',
                    text: 'Excellent running shoes. It turns very sharpely on the foot. Excellent running shoes. It turns very sharpely on the foot. Excellent running shoes. It turns very sharpely on the foot.  Excellent running shoes. It turns very sharpely on the foot.',
                },
            ],
        },
    ],
    details: [
        {
            type: 'text',
            value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lectus nisl, maximus at neque interdum, fringilla ornare odio. Maecenas non felis purus. Sed rutrum, ante eu vulputate tincidunt, lorem urna congue turpis, vitae rhoncus dolor enim ac neque. Etiam imperdiet nunc vitae ante euismod elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi iaculis, lacus vel hendrerit condimentum, mauris mauris vehicula ipsum, eu fringilla eros lorem eu enim. Vestibulum auctor accumsan aliquam. Quisque cursus ipsum sit amet cursus lacinia. Donec sed dui quam. Duis et felis vitae urna viverra sollicitudin ut ut tortor. Sed sit amet feugiat eros. Donec ligula diam, imperdiet quis quam nec, varius consequat mi. Mauris consectetur sed est in tristique.',
        },
        {
            type: 'text',
            value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lectus nisl, maximus at neque interdum, fringilla ornare odio. Maecenas non felis purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lectus nisl, maximus at neque interdum, fringilla ornare odio. Maecenas non felis purus.'
        },
        {
            type: 'image',
            value: '/images/library-stool-chair.png',
        },
        {
            type: 'text',
            value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lectus nisl, maximus at neque interdum, fringilla ornare odio. Maecenas non felis purus. Sed rutrum, ante eu vulputate tincidunt, lorem urna congue turpis, vitae rhoncus dolor enim ac neque. Etiam imperdiet nunc vitae ante euismod elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi iaculis, lacus vel hendrerit condimentum, mauris mauris vehicula ipsum, eu fringilla eros lorem eu enim. Vestibulum auctor accumsan aliquam. Quisque cursus ipsum sit amet cursus lacinia. Donec sed dui quam. Duis et felis vitae urna viverra sollicitudin ut ut tortor. Sed sit amet feugiat eros. Donec ligula diam, imperdiet quis quam nec, varius consequat mi. Mauris consectetur sed est in tristique.',
        },
        {
            type: 'image',
            value: '/images/library-stool-chair.png',
        },
    ]
};

const ProductPage = () => {
    const [activeTab, setActiveTab] = useState(TAB.DETAILS);
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const renderOldPrice = () => (
        <span className="product-page__price_old">${product.oldPrice}.00</span>
    );

    const renderColors = () => (
        <ProductFilter
            title="Color"
            className="product-page__colors"
        >
            <ProductColors
                items={product.colors}
                activeItem={product.colors[0]}
            />
        </ProductFilter>
    );

    const renderTab = tab => {
        const tabClassName = cn('product-page__tab', {
            'product-page__tab_active': tab === activeTab,
        });

        return (
            <li
                key={tab}
                className={tabClassName}
                onClick={() => setActiveTab(tab)}
            >
                {tabName[tab]}
            </li>
        );
    };

    const renderTabs = () => tabs.map(renderTab);

    const renderTabContent = () => {
        switch (activeTab) {
            case TAB.DETAILS:
                return (
                    <ProductDetails
                        className="product-page__details"
                        items={product.details}
                    />
                );
            case TAB.REVIEWS:
                return (
                    <ProductReviews
                        className="product-page__reviews"
                        items={product.reviews}
                    />
                );
            case TAB.QUESTIONS:
                return (
                    <ProductQuestions
                        className="product-page__questions"
                        items={product.questions}
                    />
                );
            default:
                return <div />;
        }
    };

    return (
        <main className="product-page">
            <div className="product-page__header">
				<Breadcrumbs items={breadcrumbs} />
            </div>
            <div className="product-page__content">
                <div className="product-page__top">
                    <ImageGallery items={images} />
                    <div className="product-page__info">
                        <h1 className="product-page__title">{product.name}</h1>
                        <p className="product-page__code">Code: ASd15DF2</p>
                        <div className="product-page__rating">
                            <Rating value={4} />
                            <span>{product.reviews.length} reviews</span>
                        </div>
                        <div className="product-page__price">
                            <span className="product-page__price_new">${product.price}.00</span>
                            {renderOldPrice()}
                        </div>
                        {!!product.colors && renderColors()}
                        <div className="product-page__buttons">
                            <Button
                                text="Add to cart"
                                icon={<CartIcon />}
                                gap={10}
                                buttonProps={{
                                    className: 'product-page__add',
                                }}
                            />
                            <Button
                                buttonProps={{
                                    className: cn('product-page__favorite', { 'product-page__favorite_active': favorite })
                                }}
                                onClick={() => setFavorite(prevState => !prevState)}
                            >
                                <HeartIcon />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="product-page__bottom">
                    <div>
                        <ul className="product-page__tabs">
                            {renderTabs()}
                        </ul>
                        {renderTabContent()}
                    </div>
                    <div>
                        <ProductRating items={product.scores} />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProductPage;
