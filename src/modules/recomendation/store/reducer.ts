import { ActionTypes } from './action-types';
import { initialRecState } from './intital-rec-state';
import { RecommendationState } from "../../../store/reducers";

const recommendationReducer = (state: RecommendationState = initialRecState, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_HOME_PAGE_REC_REQUEST:
      return { ...state, loading: true, error: null };

    case ActionTypes.GET_HOME_PAGE_REC_SUCCESS:
      return { ...state, homePageRecommendations: [...state.homePageRecommendations, ...action.payload.data.products], loading: false };

    case ActionTypes.GET_HOME_PAGE_REC_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
};

export default recommendationReducer;