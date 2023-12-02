import { all, call, put, takeLatest } from 'redux-saga/effects';
import { loginSuccess, loginFailure } from './actions';
import { LOGIN_REQUEST, LOGOUT } from './action-types';
import AuthService from "../services/authService";
import { AuthTokens } from "../interfaces/auth-token.interface";

function* loginSaga(action: any) {
    try {
        const { username, password } = action.payload;

        // Make the API request
        const response: AuthTokens = yield call(AuthService.login, username, password);

        // Extract tokens from the response
        const tokens = response;

        // Dispatch a success action
        yield put(loginSuccess(response));
    } catch (error) {
        // Dispatch a failure action
        yield put(loginFailure('Login failed. Please try again.'));
    }
}

function* logoutSaga() {
    try {
        // Make the API request
        const response: AuthTokens = yield call(AuthService.logout);

    } catch (error) {
        // Dispatch a failure action
        yield put(loginFailure('Login failed. Please try again.'));
    }
}


export function* watchLogin() {
    yield takeLatest(LOGIN_REQUEST, loginSaga);
}

export function* watchLogout() {
    yield takeLatest(LOGOUT, logoutSaga);
}

// Export the root saga for the auth module
export function* authSaga() {
    yield all([
        watchLogin(),
        watchLogout(),
        // Add other sagas for the auth module as needed
    ]);
}
