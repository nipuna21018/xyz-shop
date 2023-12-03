import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducers';
import { isAuthenticated } from '../../../auth/store/selectors';

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const isAuthenticatedUser = useSelector((state: RootState) => isAuthenticated(state));

  return isAuthenticatedUser ? (
    <React.Fragment>{element}</React.Fragment>
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default PrivateRoute;