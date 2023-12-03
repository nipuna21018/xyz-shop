import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from '../../../../store/store';
import PrivateRoute from './privateRoute';
import UserProfilePage from '../../../auth/pages/userProfilePage';

// Mock useSelector to return true for isAuthenticated
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn().mockReturnValue(true),
}));

describe('PrivateRoute Component', () => {
  it('renders the component when user is authenticated', () => {
    render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/profile" element={<PrivateRoute element={<UserProfilePage />} />} />
          </Routes>
        </Router>
      </Provider>
    );

    // Assert that UserProfilePage component is rendered when user is authenticated
    expect(screen.getByText('Content of UserProfilePage')).toBeInTheDocument();
  });

  it('redirects to login when user is not authenticated', () => {
    // Mock useSelector to return false for isAuthenticated
    jest.spyOn(require('react-redux'), 'useSelector').mockReturnValue(false);

    render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/profile" element={<PrivateRoute element={<UserProfilePage />} />} />
          </Routes>
        </Router>
      </Provider>
    );

    // Assert that the user is redirected to the login page
    expect(screen.getByText('Redirecting to /login')).toBeInTheDocument();
  });
});
