import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './action-types';
import { initialAuthState } from './intital-auth-state';

const reducer = (state = initialAuthState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        tokens: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
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