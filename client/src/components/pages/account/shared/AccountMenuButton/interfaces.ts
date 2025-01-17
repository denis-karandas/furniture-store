export interface IAccountMenuButtonProps {
    id: number;
    options: IAccountMenuButtonOption[];
}

export interface IAccountMenuButtonOption {
    value: string;
    label: string;
    textColor?: string;
    onClick: () => void;
}
