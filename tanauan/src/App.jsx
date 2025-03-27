import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spinner from './components/Spinner/Spinner'; // Import the Spinner for suspense fallback UI
import pages from './pages'; // Import all the pages from index.js

// Lazy load the components from pages
const LazyHome = React.lazy(() => import('./pages/Home/Home'));
const LazyBarangay = React.lazy(() => import('./pages/Barangay/Barangay'));
const LazyNews = React.lazy(() => import('./pages/News/News'))
const LazyMission = React.lazy(() => import('./pages/Mission/Mission'))
const LazyCityOfficials = React.lazy(() => import('./pages/cityOfficials/CityOfficials'))

const routes = [
  { path: "/", element: <LazyHome /> },
  { path: "/home", element: <LazyHome /> },
  { path: "/barangay", element: <LazyBarangay /> },
  { path: "/news", element: <LazyNews />},
  { path: "/vision", element: <LazyMission />},
  { path: "/cityOfficials", element: <LazyCityOfficials />}

];

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
