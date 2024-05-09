import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";

import {
  Home,
  Admin,
  AdminPage,
  LoginTeacher,
  TeacherPage,
  StudLogin,
  StudRegister,
  StudPage,
} from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="admin" element={<Admin />} />
      <Route path="admin-dashboard" element={<AdminPage />} />
      <Route path="login-teacher" element={<LoginTeacher />} />
      <Route path="teacher-page" element={<TeacherPage />} />
      <Route path="login-student" element={<StudLogin />} />
      <Route path="register-student" element={<StudRegister />} />
      <Route path="student-page" element={<StudPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
