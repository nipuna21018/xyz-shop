import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./modules/auth/pages/login-page";
import HomePage from "./modules/home/pages/home-page";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              {/* Add more routes as needed */}
          </Routes>
      </Router>
  );
}

export default App;
