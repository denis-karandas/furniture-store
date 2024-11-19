import { ISignUpFormValues } from 'components/SignUpForm/interfaces';

export interface ISignUpPageProps {
    onSubmit: (values: ISignUpFormValues) => void;
}
