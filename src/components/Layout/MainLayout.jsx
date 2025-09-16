// src/components/Layout/MainLayout.jsx (código correcto)
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navigation />
      <div className="main-content">
        <Outlet /> {/* <-- ¡Esto es lo que faltaba! */}
      </div>
    </div>
  );
};

export default MainLayout;