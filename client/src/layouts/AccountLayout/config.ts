import { AccountSidebarItemKey, IAccountSidebarItem } from 'components/pages/account/shared/AccountSidebar/interfaces';

export const sidebarItems: IAccountSidebarItem[] = [
    {
        key: AccountSidebarItemKey.ORDERS,
        name: 'My orders',
        path: '/account/orders',
    },
    {
        key: AccountSidebarItemKey.CART,
        name: 'Cart',
        path: '/account/cart',
    },
    {
        key: AccountSidebarItemKey.FAVORITES,
        name: 'Favorites',
        path: '/account/favorites',
    },
    {
        key: AccountSidebarItemKey.REVIEWS,
        name: 'Reviews',
        path: '/account/reviews',
    },
    {
        key: AccountSidebarItemKey.QUESTIONS,
        name: 'Questions',
        path: '/account/questions',
    },
    {
        key: AccountSidebarItemKey.SETTINGS,
        name: 'Settings',
        path: '/account/settings',
    },
];
