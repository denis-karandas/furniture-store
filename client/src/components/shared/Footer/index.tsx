import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo, SocialNetworks, Button } from 'components';
import { IFooterLink } from './interfaces';

import './Footer.scss';

const categoryItems: IFooterLink[] = [
    {
        name: 'Sofa',
        path: '/sofa',
    },
    {
        name: 'Armchair',
        path: '/armchair',
    },
    {
        name: 'Wing Chair',
        path: '/wing-chair',
    },
    {
        name: 'Desk Chair',
        path: '/desk-chair',
    },
    {
        name: 'Wooden Chair',
        path: '/wooden-chair',  
    },
    {
        name: 'Park Bench',
        path: '/park-bench',
    },
];

const supportItems: IFooterLink[] = [
    {
        name: 'Help & Support',
        path: '/support'
    },
    {
        name: 'Tearms of Use',
        path: '/tearms-of-use',
    },
    {
        name: 'Privacy Policy',
        path: '/privacy-policy',
    },
];

const Footer = () => {
    const [email, setEmail] = useState('');

    const onSubscribe = () => {
        console.log(email);
    };

    const renderLink = ({ name, path }: IFooterLink, index: number) => (
        <li key={index}>
            <NavLink to={path}>{name}</NavLink>
        </li>
    );

    const renderLinks = (links: IFooterLink[]) => links.map(renderLink);

    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__container">
                    <div className="footer__about">
                        <Logo />
                        <span className="footer__about-text">
                            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                            Cras egestas purus 
                        </span>
                        <SocialNetworks className="footer__social-networks" />
                    </div>
                    <div className="footer__category">
                        <span className="footer__section">Category</span>
                        <ul className="footer__list">
                            {renderLinks(categoryItems)}
                        </ul>
                    </div>
                    <div className="footer__support">
                        <span className="footer__section">Support</span>
                        <ul className="footer__list">
                            {renderLinks(supportItems)}
                        </ul>
                    </div>
                    <div className="footer__newsletter">
                        <span className="footer__section">Newsletter</span>
                        <input
                            type="email"
                            name="email"
                            className="footer__email"
                            placeholder="Your Email"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Button
                            className="footer__subscribe"
                            onClick={onSubscribe}
                        >
                            Subscribe
                        </Button>
                        <span className="footer__subscribe-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</span>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__container">
                    <span className="footer__copyright">@ 2024 - Comforty - All rights reserved</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
