import { ActionTypes } from './action-types';
import { initialAuthState } from './intital-auth-state';

const reducer = (state = initialAuthState, action: any) => {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        tokens: action.payload,
        error: null,
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        tokens: null,
        error: action.payload,
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        tokens: null,
        error: null,
      };
    case ActionTypes.GET_USER_PROFILE_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionTypes.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
        error: null,
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case ActionTypes.LOAD_USER_SESSION_SUCCESS:
      return {
        ...state,
        isAuthenticated: action.payload.tokens && action.payload.tokens.accessToken && action.payload.user,
        tokens: action.payload.tokens,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export default reducer;