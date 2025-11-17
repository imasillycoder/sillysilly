import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout.jsx';
import Login from './Components/Login';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Ensure Layout renders for any path - avoids blank app if no child routes match */}
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Router>
  );
}
