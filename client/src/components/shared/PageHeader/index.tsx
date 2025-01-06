import { Breadcrumbs } from 'components';
import React from 'react';

import './PageHeader.scss';
import { IPageHeaderProps } from './interfaces';

const PageHeader = ({
    title = '',
    breadcrumbs = [],
}: IPageHeaderProps) => {
    return (
        <div className="page-header">
            <div className="page-header__content">
                <Breadcrumbs items={breadcrumbs} />
                <h1>{title}</h1>
            </div>
        </div>
    );
}

export default PageHeader;
