import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Spinner from './components/Spinner/Spinner'; 
import ProtectedRoute from './ProtectedRoute'; // Secure routes

// Lazy load pages
const LazySignUpPage = React.lazy(() => import('./pages').then(module => ({ default: module.SignUpPage })));
const LazyLoginPage = React.lazy(() => import('./pages').then(module => ({ default: module.LoginPage })));
const LazyDashboardPage = React.lazy(() => import('./pages').then(module => ({ default: module.Dashboard })));

// Define routes
const AppRoutes = () => (
  <BrowserRouter>
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<LazyLoginPage />} />
        <Route path="/login" element={<LazyLoginPage />} />
        <Route path="/signup" element={<LazySignUpPage />} />
        <Route path="/dashboard" element={<LazyDashboardPage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default AppRoutes;
