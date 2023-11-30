import { AuthTokens } from '../interfaces/auth-token.interface';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './action-types';

export const loginRequest = (username: string, password: string) => ({
    type: LOGIN_REQUEST,
    payload: { username, password },
});

export const loginSuccess = (tokens: AuthTokens) => ({
    type: LOGIN_SUCCESS,
    payload: tokens,
});

export const loginFailure = (error: string) => ({
    type: LOGIN_FAILURE,
    payload: error,
});

export const logout = () => ({
    type: LOGOUT,
});