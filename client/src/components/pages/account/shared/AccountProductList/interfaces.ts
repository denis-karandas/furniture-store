import { IAccountMenuButtonOption } from 'components/pages/account/shared/AccountMenuButton/interfaces';
import { IAccountProductItemProps } from 'components/pages/account/shared/AccountProductItem/interfaces';

export interface IAccountProductListProps {
    items: IAccountProductItemProps[];
    isLoading?: boolean;
    getOptions: (item: IAccountProductItemProps) => IAccountMenuButtonOption[];
}
