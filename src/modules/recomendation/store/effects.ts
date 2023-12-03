import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './action-types';
import RecommendationService from '../services/recommendationsService';
import { getHomePageRecFailure, getHomePageRecSuccess } from './actions';
import { RecommendationApiResponse } from '../interfaces/recApiResponse.interface';
import { AxiosResponse } from 'axios';

function* getHomePageRecSaga(action: any) {
    try {
        const { page } = action.payload;
        const response: AxiosResponse<RecommendationApiResponse> = yield call(RecommendationService.getHomePageRec, page);
        yield put(getHomePageRecSuccess(response.data));
    } catch (error) {
        yield put(getHomePageRecFailure(error));
    }
}

export function* watchRecommendations() {
    yield takeLatest(ActionTypes.GET_HOME_PAGE_REC_REQUEST, getHomePageRecSaga);
}

// Export the root saga for the recommendation module
export function* recomendationSaga() {
    yield all([
        watchRecommendations(),
        // Add other sagas for the recommendation module as needed
    ]);
}
