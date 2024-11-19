import React from 'react';
import { NavLink } from 'react-router-dom';
import { IBreadcrumb, IBreadcrumbsProps } from './interfaces';

import './Breadcrumbs.scss';

const Breadcrumbs = ({ items = [] }: IBreadcrumbsProps) => {
    const renderBreadcrumb = ({ name, path }: IBreadcrumb, index: number) => {
        return (
            <li key={index}>
                <NavLink to={path}>
                    {name}
                </NavLink>
            </li>
        );
    };

    const renderBreadcrumbs = () => items.map(renderBreadcrumb);

    return (
        <ul className="breadcrumbs">
            {renderBreadcrumbs()}
        </ul>
    );
}

export default Breadcrumbs;
