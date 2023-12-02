import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./modules/auth/pages/login-page";
import HomePage from "./modules/home/pages/home-page";
import { Provider } from 'react-redux';
import store from './store/store';
import UserProfilePage from './modules/auth/pages/userProfilePage';

function App() {
  return (
      <Provider store={store}>
          <Router>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={<UserProfilePage />} />
              {/* Add more routes as needed */}
          </Routes>
            </Router>
      </Provider>
  );
}

export default App;
