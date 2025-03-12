import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './authContext'; // Custom hook or context to manage authentication

const ProtectedRoute = ({ component: Component }) => {
  const { isAuthenticated } = useAuth(); // Check if user is authenticated
  
  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If authenticated
  return <Component />;
};

export default ProtectedRoute;
