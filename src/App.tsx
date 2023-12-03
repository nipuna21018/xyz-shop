import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./modules/auth/pages/login-page";
import HomePage from "./modules/home/pages/home-page";
import { Provider } from 'react-redux';
import store from './store/store';
import { loadUersSession } from './modules/auth/store/actions';
import UserProfilePage from './modules/auth/pages/userProfilePage';
import PrivateRoute from './modules/shared/components/privateRoute/privateRoute';
import React from 'react';

function App() {
  store.dispatch(loadUersSession());
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Using PrivateRoute to protect the routes*/}
          <Route path="/profile" element={<PrivateRoute element={<UserProfilePage />} />} />

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
