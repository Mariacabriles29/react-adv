/*Creando rutas con react router dom version 6  */

import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import logo from "../logo.svg";

import { routes } from "./routes";
import React, { Suspense } from "react";

export const Navigation = () => {
  return (
    <>
      {/* el suspense nos permite mostrar un mensaje especial cuando me muevo entre las rutas */}
      <Suspense fallback={<span>Loading...</span>}>
        <BrowserRouter>
          <div className="main-layout">
            <nav>
              <img src={logo} alt="React logo" />
              <ul>
                {/* implementando rutas de manera dinamica */}
                {routes.map(({ to, name }) => (
                  <li>
                    <NavLink
                      key={to}
                      to={to}
                      className={({ isActive }) =>
                        isActive ? "nav-active" : ""
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <Routes>
              {routes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}

              <Route
                path="/*"
                element={<Navigate to={routes[0].to} replace />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </Suspense>
    </>
  );
};
