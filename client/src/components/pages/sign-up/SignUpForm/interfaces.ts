export interface ISignUpFormProps {
    onSubmit: (values: ISignUpFormValues) => void;
}

export interface ISignUpFormValues {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
}
