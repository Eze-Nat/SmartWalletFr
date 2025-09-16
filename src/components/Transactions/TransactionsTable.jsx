// src/components/Transactions/TransactionsTable.jsx
import React from 'react';
import './Transactions.css'; // Importaremos los estilos aquí

const DUMMY_TRANSACTIONS = [
  { id: 1, date: '10/09/2025', description: 'Pago de Netflix', amount: -12.99, type: 'gasto' },
  { id: 2, date: '09/09/2025', description: 'Depósito de salario', amount: 2500.00, type: 'ingreso' },
  { id: 3, date: '08/09/2025', description: 'Compra en el supermercado', amount: -85.50, type: 'gasto' },
  { id: 4, date: '07/09/2025', description: 'Transferencia a Javier', amount: -50.00, type: 'transferencia' },
  { id: 5, date: '06/09/2025', description: 'Venta de artículo en línea', amount: 150.00, type: 'ingreso' },
];

const TransactionsTable = () => {
  return (
    <div className="transactions-table-card">
      <div className="table-header">
        <h4>Transacciones Recientes</h4>
      </div>
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Monto</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {DUMMY_TRANSACTIONS.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td className={transaction.amount > 0 ? 'positive' : 'negative'}>
                ${transaction.amount.toFixed(2)}
              </td>
              <td className={`transaction-type ${transaction.type}`}>{transaction.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;