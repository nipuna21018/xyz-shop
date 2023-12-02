import { RecommendationApiResponse } from "../interfaces/recApiResponse.interface";
import { ActionTypes } from "./action-types";

export const getHomePageRecRequest = (page: number) => ({
  type: ActionTypes.GET_HOME_PAGE_REC_REQUEST,
  payload: { page },
});

export const getHomePageRecSuccess = (data: RecommendationApiResponse) => ({
  type: ActionTypes.GET_HOME_PAGE_REC_SUCCESS,
  payload: { data },
});

export const getHomePageRecFailure = (error: any) => ({
  type: ActionTypes.GET_HOME_PAGE_REC_FAILURE,
  payload: { error },
});