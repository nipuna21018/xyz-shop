import { all, call, put, takeLatest } from 'redux-saga/effects';
import { loginSuccess, loginFailure, getUserSuccess, getUserFailure, loadUersSession, getUserRequest, loadUersSessionSuccess } from './actions';
import { ActionTypes } from './action-types';
import AuthService from "../services/authService";
import { AuthTokens } from "../interfaces/auth-token.interface";
import UserService from '../services/userService';
import { User } from '../interfaces/user.interface';
import { ERR_MSG_GET_USE_FAILED, ERR_MSG_LOGIN_FAILED } from '../constants';
import AuthStorageService from '../services/authStorage.service';

function* loginSaga(action: any) {
    try {
        const { username, password } = action.payload;

        // Make the API request
        const tokens: AuthTokens = yield call(AuthService.login, username, password);

        // Fetch user profile
        yield put(getUserRequest());

        // Dispatch a success action
        yield put(loginSuccess(tokens));
    } catch (error) {
        // Dispatch a failure action
        yield put(loginFailure(ERR_MSG_LOGIN_FAILED));
    }
}

function* logoutSaga() {
    yield call(AuthService.logout);
}

function* getUserSaga() {
    try {
        // Make the API request
        const userProfile: User = yield call(UserService.getUser);

        // Store user in local storage
        AuthStorageService.setUserProfile(userProfile);

        // Dispatch a success action
        yield put(getUserSuccess(userProfile));
    } catch (error) {
        // Dispatch a failure action
        yield put(getUserFailure(ERR_MSG_GET_USE_FAILED));
    }
}

function* loadUserSessionSaga() {
    // fetch data from local storage
    const tokens: AuthTokens = yield call(AuthStorageService.getAuthTokens);
    const user: User = yield call(AuthStorageService.getUserProfile);

    // Dispatch a success action
    yield put(loadUersSessionSuccess(tokens, user));
}

export function* watchLogin() {
    yield takeLatest(ActionTypes.LOGIN_REQUEST, loginSaga);
}

export function* watchLogout() {
    yield takeLatest(ActionTypes.LOGOUT, logoutSaga);
}

export function* watchGetUser() {
    yield takeLatest(ActionTypes.GET_USER_PROFILE_REQUEST, getUserSaga);
}

export function* watchloadUserSession() {
    yield takeLatest(ActionTypes.LOAD_USER_SESSION, loadUserSessionSaga);
}

// Export the root saga for the auth module
export function* authSaga() {
    yield all([
        watchLogin(),
        watchLogout(),
        watchGetUser(),
        watchloadUserSession(),
        // Add other sagas for the auth module as needed
    ]);
}
