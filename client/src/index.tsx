import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';

import 'swiper/css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'styles/index.scss';

const root = createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
