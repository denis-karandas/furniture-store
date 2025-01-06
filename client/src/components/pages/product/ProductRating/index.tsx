import React from 'react';
import { Rating } from 'components';
import { IProductRatingItem, IProductRatingProps } from './interfaces';
import { RatingComponentSize } from 'components/shared/Rating/interfaces';

import './ProductRating.scss';

const ProductRating = ({ items }: IProductRatingProps) => {
	const { total, quantity }: { total: number; quantity: number; } = items.reduce((prev, curr) => {
		return {
			total: prev.total + curr[0] * curr[1],
			quantity: prev.quantity + curr[1],
		};
	}, { total: 0, quantity: 0 });

	const avarageScore = +((total / quantity).toFixed(1));

	const renderScore = (item: IProductRatingItem, index: number) => (
		<li key={index}>
			<span className="product-rating__grade">{item[0]}</span>
		</li>
	);

	const renderLine = (item: IProductRatingItem, index: number) => {
		const progress = ((100 / quantity) * item[1]).toFixed(1);

		return (
			<li key={index}>
				<div className="product-rating__line">
					<div
						className="product-rating__progress"
						style={{ width: progress + '%' }}
					/>
				</div>
			</li>
		);
	};

	const renderQuantity = (item: IProductRatingItem, index: number) => (
		<li key={index}>
			<span className="product-rating__quantity">{item[1]}</span>
		</li>
	);

	const renderScores = () => items.map(renderScore);

	const renderLines = () => items.map(renderLine);

	const renderQuantities = () => items.map(renderQuantity);

  	return (
		<div className="product-rating">
			<div className="product-rating__top">
				<Rating
					gap={10}
					size={RatingComponentSize.EXTRA_LARGE}
					value={avarageScore}
				/>
				<span className="product-rating__value">{avarageScore}</span>
			</div>
			<div className="product-rating__bottom">
				<ul className="product-rating__grades">
					{renderScores()}
				</ul>
				<ul className="product-rating__lines">
					{renderLines()}
				</ul>
				<ul className="product-rating__quantities">
					{renderQuantities()}
				</ul>
			</div>
		</div>
	);
}

export default ProductRating;
