import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout, AccountLayout } from './layouts';
import { Account, HomePage, SignInPage, SignUpPage } from 'containers';
import { AuthGuard } from 'HOCs';
import { useAuth } from 'hooks';

const App = () => {
    useAuth();

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="sign-in" element={<SignInPage />} />
                    <Route path="sign-up" element={<SignUpPage />} />
                </Route>
                <Route
                    path="account"
                    element={
                        <AuthGuard>
                            <AccountLayout />
                        </AuthGuard>
                    }
                >
                    <Route index element={<Account />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;