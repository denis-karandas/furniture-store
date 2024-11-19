import React from 'react';
import cn from 'classnames';

import './BaseSection.scss';

export interface IBaseSectionProps {
    children: React.ReactNode;
	className?: string;
}

const BaseSection = ({ children, className }: IBaseSectionProps) => {
	const containerClassName = cn('base-section', className);

	return (
		<section className={containerClassName}>
			{children}
		</section>
	);
}

export default BaseSection;
