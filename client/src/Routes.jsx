import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Spinner from './components/Spinner/Spinner'; // Fallback while loading

// Lazy load pages
const LazySignUpPage = React.lazy(() => import('./pages').then(module => ({ default: module.SignUpPage })));
const LazyLoginPage = React.lazy(() => import('./pages').then(module => ({ default: module.LoginPage })));

// Define routes
const routes = [
  { path: '/', component: LazyLoginPage },
  { path: '/login', component: LazyLoginPage },
  { path: '/signup', component: LazySignUpPage },
];

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          {routes.map(({ path, component }, index) => (
            <Route key={index} path={path} element={React.createElement(component)} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
