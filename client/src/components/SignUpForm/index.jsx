import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Input, PasswordInput } from 'components';
import { Button } from 'HOCs';
import ArrowIcon from 'assets/icons/arrow.svg';

import './SignUpForm.scss';

const SignUpForm = ({ onSubmit }) => {
    const form = useForm({
        defaultValues: {
			firstName: '',
			lastName: '',
            email: '',
			phone: '',
            password: '',
        },
    });

    return (
        <FormProvider {...form}>
            <form
                className="sign-up-form"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <span className="sign-up-form__title">Sign Up</span>
                <Input 
                    name="firstName"
                    rules={{ required: true }}
                    inputProps={{
                        type: 'text',
                        placeholder: 'First name',
                        className: 'sign-up-form__first-name',
                    }}
                />
                <Input 
                    name="lastName"
                    rules={{ required: true }}
                    inputProps={{
                        type: 'text',
                        placeholder: 'Last name',
                        className: 'sign-up-form__last-name',
                    }}
                />
                <Input 
                    name="email"
                    rules={{ required: true }}
                    inputProps={{
                        type: 'text',
                        placeholder: 'Email',
                        className: 'sign-up-form__email',
                    }}
                />
                <Input 
                    name="phone"
                    rules={{ required: true }}
                    inputProps={{
                        type: 'text',
                        placeholder: 'Phone',
                        className: 'sign-up-form__phone',
                    }}
                />
                <PasswordInput
                    className="sign-up-form__password"
                    inputComponentProps={{
                        name: 'password',
                        rules: { required: true },
                    }}
                />
                <Button
                    text="Sign Up"
                    icon={<ArrowIcon />}
                    gap={12}
                    buttonProps={{
                        type: 'submit',
                        className: 'sign-up-form__button',
                    }}
                />
            </form>
        </FormProvider>
    );
}

export default SignUpForm;
