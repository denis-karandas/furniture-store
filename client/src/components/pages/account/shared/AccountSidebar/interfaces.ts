export enum AccountSidebarItemKey {
    ORDERS = 'orders',
    CART = 'cart',
    FAVORITES = 'favorites',
    REVIEWS = 'reviews',
    QUESTIONS = 'questions',
    SETTINGS = 'settings',
}

export interface IAccountSidebarProps {
    items: IAccountSidebarItem[];
}

export interface IAccountSidebarItem {
    key: AccountSidebarItemKey;
    name: string;
    path: string;
}