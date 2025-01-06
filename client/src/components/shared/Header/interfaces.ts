export interface IHeaderProps {
    user?: IHeaderUser | null;
}

export interface IHeaderUser {
    firstName: string;
    lastName: string;
}