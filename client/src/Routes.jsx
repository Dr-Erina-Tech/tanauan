import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Spinner from './components/Spinner/Spinner';
import ProtectedRoute from './ProtectedRoute';

// Lazy load pages
const LazySignUpPage = React.lazy(() => import('./pages').then(module => ({ default: module.SignUpPage })));
const LazyLoginPage = React.lazy(() => import('./pages').then(module => ({ default: module.LoginPage })));
const LazyDashboardLayout = React.lazy(() => import('./pages/Dashboard/DashboardLayout'));  // Lazy load layout

// Lazy load dashboard content
const LazyHomeContent = React.lazy(() => import('./contentArea/HomeContent/HomeContent'));
const LazyBarangayContent = React.lazy(() => import('./contentArea/BarangayContent/BarangayContent'));


// Define routes
const AppRoutes = () => (
  <BrowserRouter>
    <Suspense fallback={<Spinner />}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LazyLoginPage />} />
        <Route path="/login" element={<LazyLoginPage />} />
        <Route path="/signup" element={<LazySignUpPage />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<LazyDashboardLayout />}>
          {/* Nested Routes inside Dashboard */}
          <Route path="home" element={<LazyHomeContent />} />
          <Route path="barangay" element={<LazyBarangayContent />} />
        </Route>

        {/* Fallback for non-existing routes */}
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default AppRoutes;
