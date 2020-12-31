import React from 'react'
import AuthTemplate from '../Component/auth/AuthTemplate';
import AuthForm from '../Component/auth/AuthForm';

const LoginPage = () => {
    return (
        <AuthTemplate>
            <AuthForm type="login" />
        </AuthTemplate>
    );
};

export default LoginPage
