import React from 'react';
import { PageHeader, SignUpForm } from 'components';

import './SignUpPage.scss';

const breadcrumbs = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Sign Up',
        path: '/sign-up'
    },
];

const SignInPage = ({ onSubmit }) => {
    return (
        <main className="sign-up-page">
            <PageHeader
                title="Sign Up"
                breadcrumbs={breadcrumbs}
            />
            <div className="sign-up-page__form">
                <SignUpForm onSubmit={onSubmit} />
            </div>
        </main>
    );
}

export default SignInPage;
