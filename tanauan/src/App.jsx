import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spinner from './components/Spinner/Spinner'; // Import the Spinner for suspense fallback UI

// Lazy load the Home component
const LazyHome = React.lazy(() => import('./pages/Home/Home'));

const routes = [
  { path: "/", element: <LazyHome /> },
  { path: "/home", element: <LazyHome /> },

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