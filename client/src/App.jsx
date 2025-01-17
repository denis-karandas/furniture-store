import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthGuard, ProductPage } from 'components';
import { AccountPage, AccountFavoritesPage, HomePage, SignInPage, SignUpPage } from 'containers';
import { useAuth } from 'hooks';
import { AccountLayout, MainLayout } from 'layouts';

const App = () => {
    useAuth();

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="sign-in" element={<SignInPage />} />
                    <Route path="sign-up" element={<SignUpPage />} />
                    <Route path="category/:category" element={<div>Category</div>} />
                    <Route path=":category/:product" element={<ProductPage />} />
                </Route>
                <Route
                    path="account"
                    element={
                        <AuthGuard>
                            <AccountLayout />
                        </AuthGuard>
                    }
                >
                    <Route index element={<AccountPage />} />
                    <Route path="cart" element={<div />} />
                    <Route path="favorites" element={<AccountFavoritesPage />} />
                    <Route path="orders" element={<div />} />
                    <Route path="reviews" element={<div />} />
                    <Route path="questions" element={<div />} />
                    <Route path="settings" element={<div />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;