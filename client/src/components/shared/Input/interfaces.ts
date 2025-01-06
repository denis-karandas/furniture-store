import { UseControllerProps } from 'react-hook-form';

export interface IInputProps {
    name: string;
    rules?: UseControllerProps['rules'];
    inputProps?: Partial<HTMLInputElement>;
}