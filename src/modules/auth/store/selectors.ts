
import { RootState } from '../../../store/reducers';

// Define your selectors here

// Selector to check if the user is authenticated
export const isAuthenticated = (state: RootState): boolean => {
    return state.auth.isAuthenticated;
};