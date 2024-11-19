import React from 'react';
import { SignInForm, PageHeader } from 'components';
import { ISignInPageProps } from './interfaces';
import { IBreadcrumb } from 'components/Breadcrumbs/interfaces';

import './SignInPage.scss';


const breadcrumbs: IBreadcrumb[] = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Sign In',
        path: '/sign-in'
    },
];

const SignInPage = ({ errors, onSubmit }: ISignInPageProps) => {
    return (
        <main className="sign-in-page">
            <PageHeader
                title="Sign In"
                breadcrumbs={breadcrumbs}
            />
            <div className="sign-in-page__form">
                <SignInForm
                    errors={errors}
                    onSubmit={onSubmit}
                />
            </div>
        </main>
    );
}

export default SignInPage;
