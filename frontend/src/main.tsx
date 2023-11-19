import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPagesLayout from "./Layout/AuthPagesLayout";
import Login from "./pages/Auth/Login";
import ResetPassword from "./pages/Auth/ResetPassword";
import SecurePagesLayout from "./Layout/SecurePagesLayout";
import Dashboard from "./pages/Secure/Dashboard";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthPagesLayout>
              <Login />
            </AuthPagesLayout>
          }
        />
        <Route
          path="/reset"
          element={
            <AuthPagesLayout>
              <ResetPassword />
            </AuthPagesLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <SecurePagesLayout>
              <Dashboard />
            </SecurePagesLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
