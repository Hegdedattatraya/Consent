import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./pages/Home";

import Dashboard from "./pages/Dashboard";
import FormBuilder from "./pages/FormBuilder";
import FormEditor from "./pages/FormEditor";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form-builder" element={<FormBuilder />} />
        <Route path="/form-builder/new" element={<FormEditor />} />
      </Routes>
    </Router>
  );
};

export default App;
