
import { RootState } from '../../../store/reducers';
import { User } from '../interfaces/user.interface';

/** Selector to check if the user is authenticated */
export const isAuthenticated = (state: RootState): boolean => {
    return state.auth.isAuthenticated;
};

/** Get logged in user */
export const getUserProfile = (state: RootState): User => {
    return state.auth.user;
};

