import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { Checkbox, Input, PasswordInput } from 'components';
import { Button, Label } from 'HOCs';
import { ISignInFormProps, ISignInFormValues } from './interfaces';
import ArrowIcon from 'assets/icons/arrow.svg';

import './SignInForm.scss';

const SignInForm = ({ errors, onSubmit }: ISignInFormProps) => {
    const form = useForm<ISignInFormValues>({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        errors,
    });

    const { handleSubmit } = form;

    return (
        <FormProvider {...form}>
            <form
                className="sign-in-form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <span className="sign-in-form__title">Sign In</span>
                <Input 
                    name="email"
                    rules={{ required: true }}
                    inputProps={{
                        type: 'text',
                        placeholder: 'Email',
                        className: 'sign-in-form__email',
                    }}
                />
                <PasswordInput
                    className="sign-in-form__password"
                    inputComponentProps={{
                        name: 'password',
                        rules: { required: true },
                    }}
                />
                <div className="sign-in-form__options">
                    <Label
                        text="Remember Me"
                        position="right"
                        htmlFor="remember-me"
                        labelProps={{ className: 'sign-in-form__remember-me-label' }}
                    >
                        <Checkbox
                            id="remember-me"
                            name="rememberMe"
                            inputProps={{ className: 'sign-in-form__remember-me' }}
                        />
                    </Label>
                    <NavLink
                        className="sign-in-form__recover-password"
                        to="/recover-password"
                    >
                        Forget Password
                    </NavLink>
                </div>
                <Button
                    text="Sign In"
                    icon={<ArrowIcon />}
                    gap={12}
                    buttonProps={{
                        type: 'submit',
                        className: 'sign-in-form__button',
                    }}
                />
                <span className="sign-in-form__sign-up">Don't have account? <NavLink to="/sign-up">Sign Up</NavLink></span>
            </form>
        </FormProvider>
    );
}

export default SignInForm;
