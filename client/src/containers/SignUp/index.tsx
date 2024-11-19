import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from 'store';
import { SignUpPage } from 'components';
import { ISignUpFormValues } from 'components/SignUpForm/interfaces';

const SignUp = () => {
    const navigate = useNavigate();
    const { signUp } = useUserStore();

    const onSubmit = (values: ISignUpFormValues) => {
        signUp(values)
            .then(user => {
                if (user) {
                    navigate('/account');
                }
            });
    };

    return (
        <SignUpPage
            onSubmit={onSubmit}
        />
    );
}

export default SignUp;
