// src/components/Auth/AuthForm.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Auth.css';
import { login, register } from '../../services/authService'; // <-- ¡Importa los servicios!

const AuthForm = ({ onLogin }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Nuevo estado para la carga
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            let authResponse;
            if (isLogin) {
                authResponse = await login(email, password);
            } else {
                if (password !== confirmPassword) {
                    alert('Las contraseñas no coinciden.');
                    setIsLoading(false);
                    return;
                }
                authResponse = await register(email, password);
            }
            
            if (authResponse.success) {
                onLogin(authResponse.user.name);
                navigate('/dashboard');
            }
        } catch (error) {
            alert(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleToggle = () => {
        setIsLogin(!isLogin);
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="auth-form-card">
            <div className="auth-header">
                <div className="logo-container">
                    <span className="logo-icon">🔗</span>
                </div>
                <h2>{isLogin ? '¡Bienvenido de vuelta!' : 'Crea tu cuenta'}</h2>
            </div>
            <form onSubmit={handleSubmit} className="auth-form">
                <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {!isLogin && (
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirmar contraseña</label>
                        <input type="password" id="confirm-password" name="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </div>
                )}
                <button type="submit" className="auth-button" disabled={isLoading}>
                    {isLoading ? 'Cargando...' : isLogin ? 'Iniciar Sesión' : 'Registrarse'}
                </button>
            </form>
            <div className="auth-footer">
                <button onClick={handleToggle} className="toggle-button" disabled={isLoading}>
                    {isLogin ? '¿No tienes una cuenta? Regístrate' : '¿Ya tienes una cuenta? Inicia sesión'}
                </button>
            </div>
        </div>
    );
};

export default AuthForm;