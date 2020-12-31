import React from 'react'
import AuthTemplate from '../Component/auth/AuthTemplate';
import AuthForm from '../Component/auth/AuthForm';


const RegisterPage = () => {
    return (
        <AuthTemplate>
            <AuthForm type="register" />
        </AuthTemplate>
    );
};

export default RegisterPage
