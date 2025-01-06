import { UseControllerProps } from 'react-hook-form';

export interface ICheckboxProps {
    id: string;
    name: string;
    rules?: UseControllerProps['rules'];
    inputProps?: Partial<HTMLInputElement>;
}