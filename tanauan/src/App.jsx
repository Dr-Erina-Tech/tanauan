import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "./pages/index";

const routes = [
  { path: "/", element: <Pages.Home /> },
  { path: "/home", element: <Pages.Home /> },
  { path: "/about", element: <Pages.About /> },
  { path: "/services", element: <Pages.Services /> },
  { path: "/news", element: <Pages.News /> },
  { path: "/contact", element: <Pages.Contact /> },
];

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
