/*Creando rutas con react router dom version 6  */

import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import logo from "../logo.svg";
import { Users } from "../01-lazyload/pages";
import { RegisterPage } from "../03-forms/pages/RegisterPage";
import { FormikBasicPage } from "../03-forms/pages/FormikBasicPage";

export const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React logo" />
            <ul>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Register Page
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formik-basic"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Formik Basic
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/users"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Users
                </NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="register" element={<RegisterPage />} />
            <Route path="formik-basic" element={<FormikBasicPage />} />
            <Route path="users" element={<Users />} />

            <Route path="/*" element={<Navigate to="/register" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
