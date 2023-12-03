import { AuthTokens } from '../interfaces/auth-token.interface';
import { User } from '../interfaces/user.interface';
import { ActionTypes } from './action-types';

export const loginRequest = (username: string, password: string) => ({
    type: ActionTypes.LOGIN_REQUEST,
    payload: { username, password },
});

export const loginSuccess = (tokens: AuthTokens) => ({
    type: ActionTypes.LOGIN_SUCCESS,
    payload: tokens,
});

export const loginFailure = (error: string) => ({
    type: ActionTypes.LOGIN_FAILURE,
    payload: error,
});

export const logout = () => ({
    type: ActionTypes.LOGOUT,
});

export const getUserRequest = () => ({
    type: ActionTypes.GET_USER_PROFILE_REQUEST
});

export const getUserSuccess = (user: User) => ({
    type: ActionTypes.GET_USER_PROFILE_SUCCESS,
    payload: user,
});

export const getUserFailure = (error: string) => ({
    type: ActionTypes.GET_USER_PROFILE_FAILURE,
    payload: error,
});

export const loadUersSession = () => ({
    type: ActionTypes.LOAD_USER_SESSION
});

export const loadUersSessionSuccess = (tokens: AuthTokens, user: User) => ({
    type: ActionTypes.LOAD_USER_SESSION_SUCCESS,
    payload: {tokens, user},
});