export interface ISocialNetworksProps {
    className?: string;
}

export interface ISocialNetwork {
    key: SocialNetwork;
    url: string;
}

export enum SocialNetwork {
    FACEBOOK = 'facebook',
    TWITTER = 'twitter',
    INSTAGRAM = 'instagram',
    PINTEREST = 'pinterest',
    YOUTUBE = 'youtube',
}