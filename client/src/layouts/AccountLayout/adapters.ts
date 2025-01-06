import { IUser } from 'api/auth/interfaces';
import { IHeaderUser } from 'components/shared/Header/interfaces';

export const formatApiUserToHeaderUser = (item: IUser): IHeaderUser => ({
    firstName: item.firstName,
    lastName: item.lastName,
});
