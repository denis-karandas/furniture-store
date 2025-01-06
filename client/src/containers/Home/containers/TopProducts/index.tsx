import React, { useEffect, useState } from 'react';
import { ProductCarousel, BaseSection } from 'components';
import { fetchTopProducts } from 'api/products';
import { formatProductToComponentItem } from 'containers/Home/adapters';

const TopProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchTopProducts(8)
            .then(({ items }) => {
                setProducts(items.map(formatProductToComponentItem));
            });
    }, []);

    return (
        <BaseSection className="mt-60">
            <ProductCarousel
                title="Top Products"
                products={products}
            />
        </BaseSection>
    );
}

export default TopProducts;
