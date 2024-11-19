import React from 'react';
import cn from 'classnames';
import { socialNetworks } from './config';
import { ISocialNetwork, ISocialNetworksProps, SocialNetwork } from './interfaces';
import FacebookIcon from 'assets/icons/facebook.svg';
import TwitterIcon from 'assets/icons/twitter.svg';
import InstagramIcon from 'assets/icons/instagram.svg';
import PinterestIcon from 'assets/icons/pinterest.svg';
import YouTubeIcon from 'assets/icons/youtube.svg';

import './SocialNetworks.scss';


const SocialNetworks = ({ className }: ISocialNetworksProps) => {
    const renderIconByKey = (key: SocialNetwork) => {
        switch (key) {
            case SocialNetwork.FACEBOOK:
                return <FacebookIcon />;
            case SocialNetwork.TWITTER:
                return <TwitterIcon />;
            case SocialNetwork.INSTAGRAM:
                return <InstagramIcon />;
            case SocialNetwork.PINTEREST:
                return <PinterestIcon />;
            case SocialNetwork.YOUTUBE:
                return <YouTubeIcon />;
            default:
                return null;
        }
    };

    const renderSocialNetwork = ({ key, url }: ISocialNetwork) => (
        <li key={key}>
            <a
                href={url}
                target="_blank"
            >
                {renderIconByKey(key)}
            </a>
        </li>
    );

    const renderSocialNetworks = () => socialNetworks.map(renderSocialNetwork);

    const listClassName = cn('social-networks', className);

    return (
        <ul className={listClassName}>
            {renderSocialNetworks()}
        </ul>
    );
}

export default SocialNetworks;
