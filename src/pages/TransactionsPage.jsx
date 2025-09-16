// src/pages/TransactionsPage.jsx
import React from 'react';
import TransactionsTable from '../components/Transactions/TransactionsTable';

const TransactionsPage = () => {
  return (
    <div className="transactions-page-container">
      <h2>Historial de Transacciones</h2>
      <TransactionsTable />
    </div>
  );
};

export default TransactionsPage;