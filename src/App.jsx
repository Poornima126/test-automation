import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import UploadDrawings from './pages/UploadDrawings';
import FileComparison from './pages/FileComparison';
import ReportPreview from './pages/ReportPreview';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upload" element={<UploadDrawings />} />
            <Route path="/comparison" element={<FileComparison />} />
            <Route path="/report" element={<ReportPreview />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
