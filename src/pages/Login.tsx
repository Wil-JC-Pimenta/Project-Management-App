import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const { login } = useAuth();

  return (
    <div className="login-page">
      <h2>Login</h2>
      <GoogleLogin
        onSuccess={credentialResponse => {
          login();
        }}
        onError={() => {
          console.log('Erro de login');
        }}
      />
    </div>
  );
};

export default Login;
