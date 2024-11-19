import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoIcon from 'assets/icons/logo.svg';

import './Logo.scss';

const Logo = () => {
    return (
        <NavLink className="logo" to="/">
            <LogoIcon />
            <span>Comforty</span>
        </NavLink>
    );
};

export default Logo;
