import { ISignUpFormValues } from 'components/pages/sign-up/SignUpForm/interfaces';

export interface ISignUpPageProps {
    onSubmit: (values: ISignUpFormValues) => void;
}
