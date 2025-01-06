export interface IDropdownProps<T> {
    options: IDropdownOption<T>[];
    className?: string;
    value?: IDropdownOption<T>;
}

export interface IDropdownOption<T> {
    value: T;
    label: string;
}
