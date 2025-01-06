import React from 'react';
import { MoonLoader } from 'react-spinners';

import './PageLoader.scss';

const PageLoader = () => {
    return (
        <div className="page-loader">
            <MoonLoader color="#029FAE" />
        </div>
    );
}

export default PageLoader;
