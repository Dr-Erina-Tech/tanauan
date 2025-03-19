import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Spinner from './components/Spinner/Spinner'; 
import ProtectedRoute from './ProtectedRoute'; // Secure routes (Not yet)

// Lazy load pages
const LazySignUpPage = React.lazy(() => import('./pages').then(module => ({ default: module.SignUpPage })));
const LazyLoginPage = React.lazy(() => import('./pages').then(module => ({ default: module.LoginPage })));
const LazyDashboardLayout = React.lazy(() => import('./pages').then(module => ({ default: module.Dashboard })));

// Individual Pages inside Dashboard (DYNAMIC CONTENT)
const LazyHomeContent =  React.lazy(() => import('./contentArea').then(module => ({ default: module.HomeContent })));

// Define routes
const AppRoutes = () => (
  <BrowserRouter>
    <Suspense fallback={<Spinner />}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LazyLoginPage />} />
        <Route path="/login" element={<LazyLoginPage />} />
        <Route path="/signup" element={<LazySignUpPage />} />

        {/* Dashboard Routes : Not yet protected*/}
        <Route path="/dashboard" element={<LazyDashboardLayout />} />

        {/* Nested Routes for the content */}
        <Route path="home" element={<LazyHomeContent />} />

      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default AppRoutes;
