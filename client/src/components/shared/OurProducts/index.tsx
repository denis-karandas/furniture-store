import React from 'react';
import cn from 'classnames';
import Skeleton from 'react-loading-skeleton';
import { ProductItem, EmptyContainer } from 'components';
import { IProductItem } from 'components/shared/ProductItem/interfaces';
import { IOurProductsProps, IProductTab } from './interfaces';

import './OurProducts.scss';

const OurProducts = ({
    activeTab,
    tabs = [],
    products = [],
    isLoading = false,
    setTab,
    onAddFavorite,
    onDeleteFavorite,
}: IOurProductsProps) => {
    const renderTab = ({ key, name }: IProductTab) => {
        const tabClassName = cn({ 'our-products__tab_active': key === activeTab });

        return (
            <li
                key={key}
                className={tabClassName}
                onClick={() => setTab(key)}
            >
                {name}
            </li>
        );
    };

    const renderTabs = () => tabs.map(renderTab);

    const renderProduct = (product: IProductItem) => (
        <li key={product.id}>
            <ProductItem
                {...product}
                onAddFavorite={onAddFavorite}
                onDeleteFavorite={onDeleteFavorite}
            />
        </li>
    );

    const renderSkeletonItem = (index: number) => (
        <li key={`skeleton-item-${index}`}>
            <Skeleton width={312} height={374} />
        </li>
    );

    const renderProducts = (): React.ReactNode => {
        if (isLoading || products.length) {
            return (
                <ul className="our-products__products">
                    {
                        isLoading
                            ? [...Array(8).keys()].map(renderSkeletonItem)
                            : products.map(renderProduct)
                    }
                </ul>
            );
        }

        return (
            <div className="our-products__empty">
                <EmptyContainer text="No Products" />
            </div>
        );
    };

    return (
        <div className="our-products">
            <h2 className="our-products__title">Our Products</h2>
            <ul className="our-products__tabs">
                {renderTabs()}
            </ul>
            {renderProducts()}
        </div>
    );
}

export default OurProducts;
