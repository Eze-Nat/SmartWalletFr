import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';

// Importa los componentes de las páginas
import AuthenticationPage from './pages/AuthenticationPage';
import DashboardPage from './pages/DashboardPage';

import TransactionsPage from './pages/TransactionsPage'; 
const BillPayPage = () => <h1>Página de Pagos</h1>;
const MoneyTransferPage = () => <h1>Página de Transferencias</h1>;

import MainLayout from './components/Layout/MainLayout';
import Navigation from './components/Navigation/Navigation';

const App = () => {
    // 1. Agregamos localStorage para que el estado persista al recargar.
    // Si hay un 'userName' en localStorage, lo usamos; si no, el valor por defecto es 'Usuario'.
    const [userName, setUserName] = useState(localStorage.getItem('userName') || 'Usuario');

    // Esta función se llama al iniciar sesión o registrarse.
    const handleLogin = (name) => {
        setUserName(name);
    };

    // 2. Nueva función para cerrar sesión.
    // Remueve los datos de autenticación de localStorage.
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userName');
        setUserName('Usuario'); // Restablece el nombre de usuario.
    };

    // 3. El PrivateRoute ahora comprueba si existe un token en localStorage para saber si el usuario está autenticado.
    const PrivateRoute = ({ children }) => {
        const isAuthenticated = localStorage.getItem('authToken');
        return isAuthenticated ? children : <Navigate to="/login" />;
    };
    
    // 4. El MainLayout también se define aquí para pasarle la función de cerrar sesión.
    // Recibe la prop 'onLogout' para que el componente Navigation pueda usarla.
    const MainLayout = () => (
        <div className="main-layout">
            <Navigation onLogout={handleLogout} />
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    );

    return (
        <Router>
            <Routes>
                {/* Ruta de login */}
                <Route path="/login" element={<AuthenticationPage onLogin={handleLogin} />} />
                
                {/* Rutas protegidas */}
                <Route element={<PrivateRoute><MainLayout /></PrivateRoute>}>
                    <Route index element={<Navigate to="/dashboard" replace />} />
                    <Route path="/dashboard" element={<DashboardPage userName={userName} />} />
                    <Route path="/transactions" element={<TransactionsPage />} />
                    <Route path="/bill-pay" element={<BillPayPage />} />
                    <Route path="/money-transfer" element={<MoneyTransferPage />} />
                </Route>
                
                <Route path="*" element={<h1>404: Página no encontrada</h1>} />
            </Routes>
        </Router>
    );
};

export default App;