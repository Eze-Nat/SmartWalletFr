import React from 'react';
import './Dashboard.css'; // O un CSS específico si lo creas

const QuickActions = () => {
  return (
    <div className="quick-actions-container">
      <div className="action-card transfer">
        <span className="icon">💸</span>
        <span>Transferir</span>
      </div>
      <div className="action-card pay">
        <span className="icon">💳</span>
        <span>Pagar</span>
      </div>
      <div className="action-card add">
        <span className="icon">➕</span>
        <span>Añadir Tarjeta</span>
      </div>
      <div className="action-card save">
        <span className="icon">💾</span>
        <span>Ahorrar</span>
      </div>
    </div>
  );
};

export default QuickActions; // <-- ¡Esta línea es la clave!