import { all, call, put, takeLatest } from 'redux-saga/effects';
import { loginSuccess, loginFailure } from './actions';
import { LOGIN_REQUEST, LOGOUT } from './action-types';
import authService from "../services/authService";
import { AuthTokens } from "../interfaces/auth-token.interface";

function* loginSaga(action: any) {
    try {
        const { username, password } = action.payload;

        // Make the API request
        const response: AuthTokens = yield call(authService.login, username, password);

        // Extract tokens from the response
        const tokens = response;

        // Dispatch a success action
        yield put(loginSuccess(response));
    } catch (error) {
        // Dispatch a failure action
        yield put(loginFailure('Login failed. Please try again.'));
    }
}


export function* watchLogin() {
    yield takeLatest(LOGIN_REQUEST, loginSaga);
}

// Export the root saga for the auth module
export function* authSaga() {
    yield all([
        watchLogin(),
        // Add other sagas for the auth module as needed
    ]);
}
