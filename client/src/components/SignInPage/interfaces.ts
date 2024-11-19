import { UseFormProps } from 'react-hook-form';
import { ISignInFormValues } from 'components/SignInForm/interfaces';

export interface ISignInPageProps {
    errors: UseFormProps['errors'];
    onSubmit: (values: ISignInFormValues) => void;
}
