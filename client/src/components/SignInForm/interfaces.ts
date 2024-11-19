import { UseFormProps } from 'react-hook-form';

export interface ISignInFormProps {
    errors: UseFormProps['errors'];
    onSubmit: (values: ISignInFormValues) => void;
}

export interface ISignInFormValues {
    email: string;
    password: string;
    rememberMe: boolean;
}
