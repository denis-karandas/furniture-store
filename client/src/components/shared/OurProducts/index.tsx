import React from 'react';
import cn from 'classnames';
import { ProductItem } from 'components';
import { IProductItemProps } from 'components/shared/ProductItem/interfaces';
import { IOurProductsProps, IProductTab } from './interfaces';

import './OurProducts.scss';

const OurProducts = ({
    activeTab,
    tabs = [],
    products = [],
    setTab,
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

    const renderProduct = (product: IProductItemProps, index: number) => (
        <li key={product.id}>
            <ProductItem {...product} />
        </li>
    );
    const renderProducts = () => products.map(renderProduct);

    return (
        <div className="our-products">
            <h2 className="our-products__title">Our Products</h2>
            <ul className="our-products__tabs">
                {renderTabs()}
            </ul>
            <ul className="our-products__products">
                {renderProducts()}
            </ul>
        </div>
    );
}

export default OurProducts;
