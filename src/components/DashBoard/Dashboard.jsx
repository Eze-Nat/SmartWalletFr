import React from 'react';
import QuickActions from './QuickActions';
import './Dashboard.css';

const Dashboard = ({userName}) => {
  return (
    <div className="dashboard-container">
      {/* Sección del encabezado del Dashboard */}
      <header className="dashboard-header">
        <div className="welcome-message">
          <h2>Hola, {userName}!</h2>
          <p>Mira lo que ha estado pasando en tu cuenta.</p>
        </div>
        <div className="user-profile">
          <img src="/src/assets/images/avatar.png" alt="User Avatar" className="avatar" />
        </div>
      </header>

      {/* Sección de resumen de saldos */}
      <section className="balance-summary">
        {/* Aquí irían componentes de tarjetas con los saldos */}
        <div className="balance-card">
          <h4>Saldo de la cuenta</h4>
          <h3>$12,450.50</h3>
        </div>
        <div className="balance-card">
          <h4>Ahorros</h4>
          <h3>$5,800.00</h3>
        </div>
      </section>

      {/* Sección de Acciones Rápidas */}
      <section className="quick-actions-section">
        <h3>Acciones rápidas</h3>
        <QuickActions />
      </section>

      {/* Sección de Gráficos (ejemplo) */}
      <section className="charts-section">
        <h3>Actividad de la cuenta</h3>
        {/* Aquí iría un componente para el gráfico */}
      </section>

      {/* Sección de Transacciones Recientes */}
      <section className="recent-transactions">
        <h3>Transacciones recientes</h3>
        {/* Aquí iría una lista de transacciones */}
      </section>
    </div>
  );
};

export default Dashboard;