// src/pages/AuthenticationPage.jsx
import React from 'react';
import AuthForm from '../components/Auth/AuthForm';
import '../components/Auth/Auth.css';

const AuthenticationPage = ({ onLogin }) => {
  return (
    <div className="auth-page-container">
      <AuthForm onLogin={onLogin} />
    </div>
  );
};

export default AuthenticationPage;