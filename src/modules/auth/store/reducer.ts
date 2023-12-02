import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, LOGIN_REQUEST } from './action-types';
import { initialAuthState } from './intital-auth-state';

const reducer = (state = initialAuthState, action: any) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        tokens: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        tokens: null,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        tokens: null,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;