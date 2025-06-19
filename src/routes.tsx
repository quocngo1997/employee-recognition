import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import EmployeeList from "./pages/recognize/EmployeeList";
import RecognizeSuccess from "./pages/recognize/Success";

export const EmployeeRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/login" />} />
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/recognize" element={<EmployeeList />} />
    <Route path="/recognize/success" element={<RecognizeSuccess />} />
  </Routes>
);
