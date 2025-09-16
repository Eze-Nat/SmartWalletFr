// src/pages/DashboardPage.jsx (código CORRECTO)
import React from 'react';
import Dashboard from '../components/DashBoard/Dashboard';

const DashboardPage = ({userName}) => {
  return (
    <div className="dashboard-page">
      <Dashboard userName={userName} />
    </div>
  );
};

export default DashboardPage;