import { UseFormProps } from 'react-hook-form';
import { ISignInFormValues } from 'components/pages/sign-in/SignInForm/interfaces';

export interface ISignInPageProps {
    errors: UseFormProps['errors'];
    onSubmit: (values: ISignInFormValues) => void;
}
