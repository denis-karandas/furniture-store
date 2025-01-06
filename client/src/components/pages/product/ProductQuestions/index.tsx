import React from 'react';
import cn from 'classnames';
import { Dropdown, ProductMessage, Button } from 'components';
import { filterOptions } from './config';
import { IProductQuestionsProps } from './interfaces';
import { IProductMessageProps } from 'components/pages/product/ProductMessage/interfaces';

import './ProductQuestions.scss';

const ProductQuestions = ({
    className,
    items = [],
}: IProductQuestionsProps) => {
    const renderQuestion = (item: IProductMessageProps) => (
        <li key={item.id} className="product-questions__item">
            <ProductMessage {...item} hideRating />
        </li>
    );

    const renderQuestions = () => items.map(renderQuestion);

    const containerClassName = cn('product-questions', className);

    return (
        <div className={containerClassName}>
            <div className="product-questions__buttons">
                <Dropdown
                    className="product-questions__date-filter"
                    options={filterOptions}
                    value={filterOptions[0]}
                />
                <Button
                    text="Ask question"
                    buttonProps={{
                        className: 'product-questions__new',
                    }}
                />
            </div>
            <ul className="product-questions__list">
                {renderQuestions()}
            </ul>
        </div>
    );
}

export default ProductQuestions;
