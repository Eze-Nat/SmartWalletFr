// src/components/Navigation/Navigation.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ onLogout }) => { // <-- Recibimos la prop onLogout
  return (
    <nav className="sidebar-navigation">
      <div className="logo">
        <span>🔗</span>
        <h3>FinanApp</h3>
      </div>
      <ul className="nav-list">
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <span className="icon">🏠</span>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/transactions" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <span className="icon">📊</span>
            Transacciones
          </NavLink>
        </li>
        <li>
          <NavLink to="/bill-pay" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <span className="icon">💳</span>
            Pagos
          </NavLink>
        </li>
        <li>
          <NavLink to="/money-transfer" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <span className="icon">💸</span>
            Transferencias
          </NavLink>
        </li>
        {/* ...otros NavLink... */}
      </ul>
      <div className="logout-section">
        <button className="logout-button" onClick={onLogout}> {/* <-- Llamamos a onLogout aquí */}
          <span className="icon">➡️</span>
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};

export default Navigation;