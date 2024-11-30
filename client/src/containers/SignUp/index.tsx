import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from 'store';
import { registration } from 'api/auth';
import { SignUpPage } from 'components';
import { ISignUpFormValues } from 'components/SignUpForm/interfaces';

const SignUp = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { user, setUser } = useUserStore();

    useEffect(() => {
        if (user) {
            navigate('/account');
        }
    }, [user]);

    const onSubmit = async (values: ISignUpFormValues) => {
        setIsLoading(true);
        setError(null);

        try {
            const { user } = await registration(values);

            localStorage.setItem('authenticated', '1');

            setUser(user);
        }
        catch (err: any) {
            setError(err.message);
        }

        setIsLoading(false);
    };

    return (
        <SignUpPage
            onSubmit={onSubmit}
        />
    );
}

export default SignUp;
