import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UseFormProps } from 'react-hook-form';
import { SignInPage } from 'components';
import { ISignInFormValues } from 'components/SignInForm/interfaces';
import { useUserStore } from 'store';

const SignIn = () => {
    const navigate = useNavigate();
    const { error, signIn, resetError } = useUserStore();

    useEffect(() => {
        return () => {
            resetError();
        };
    }, [resetError]);

    const onSubmit = (values: ISignInFormValues) => {
        signIn({ email: values.email, password: values.password })
            .then(user => {
                if (user) {
                    navigate('/account');
                }
            });
    };

    const getErrors = (): UseFormProps['errors'] => {
        if (error) {
            return {
                email: {
                    type: 'validate',
                    message: error ? error.message : 'Unknown error',
                },
                password: {
                    type: 'validate',
                    message: error ? error.message : 'Unknown error',
                },
            };
        }

        return {};
    };

    return (
        <SignInPage
            errors={getErrors()}
            onSubmit={onSubmit}
        />
    );
}

export default SignIn;
