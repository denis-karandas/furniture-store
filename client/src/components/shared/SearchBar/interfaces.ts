export interface ISearchBarProps {
    name: string;
    value?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
}