import { IAccountProductItemProps } from 'components/pages/account/shared/AccountProductItem/interfaces';
import { IAccountMenuButtonOption } from 'components/pages/account/shared/AccountMenuButton/interfaces';

export interface IAccountFavoritesPageProps {
    products: IAccountProductItemProps[];
    isLoading?: boolean;
    getOptions: (item: IAccountProductItemProps) => IAccountMenuButtonOption[];
}
