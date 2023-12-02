import { all } from 'redux-saga/effects';
import { authSaga } from '../modules/auth/store/effects';

function* rootEffect() {
    yield all([
        authSaga(),
    ]);
}

export default rootEffect;