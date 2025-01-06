import React, { useEffect, useState } from 'react';
import { ProductCarousel, BaseSection } from 'components';
import { fetchRecentProducts } from 'api/products';
import { formatProductToComponentItem } from 'containers/Home/adapters';

const RecentlyAdded = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchRecentProducts(8)
            .then(({ items }) => {
                setProducts(items.map(formatProductToComponentItem));
            });
    }, []);

    return (
        <BaseSection className="mt-80">
            <ProductCarousel
                title="Recently Added"
                products={products}
            />
        </BaseSection>
    );
}

export default RecentlyAdded;
