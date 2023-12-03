import { all } from 'redux-saga/effects';
import { authSaga } from '../modules/auth/store/effects';
import { recomendationSaga } from '../modules/recomendation/store/effects';

function* rootEffect() {
    yield all([
        authSaga(),
        recomendationSaga()
    ]);
}

export default rootEffect;