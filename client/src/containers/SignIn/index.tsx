import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UseFormProps } from 'react-hook-form';
import { useUserStore } from 'stores';
import { login } from 'api/auth';
import { SignInPage } from 'components';
import { ISignInFormValues } from 'components/pages/sign-in/SignInForm/interfaces';

const SignIn = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { user, setUser } = useUserStore();

    useEffect(() => {
        if (user) {
            navigate('/account');
        }
    }, [user]);

    const onSubmit = async (values: ISignInFormValues) => {
        setIsLoading(true);
        setError(null);

        try {
            const { user } = await login({ email: values.email, password: values.password });

            localStorage.setItem('authenticated', '1');

            setUser(user);
        }
        catch (err: any) {
            setError(err.message);
        }

        setIsLoading(false);
    };

    const getErrors = (): UseFormProps['errors'] => {
        if (error) {
            return {
                email: {
                    type: 'validate',
                    message: error || 'Unknown error',
                },
                password: {
                    type: 'validate',
                    message: error || 'Unknown error',
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
