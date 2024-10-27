import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScreenA from './components/ScreenA/ScreenA';
import ScreenB from './components/ScreenB/ScreenB';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh' }}>
        <div style={{ flex: 1, borderRight: '1px solid #ccc' }}>
          <Routes>
            <Route path="/*" element={<ScreenA />} />
          </Routes>
        </div>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/*" element={<ScreenB />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
