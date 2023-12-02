import { combineReducers } from 'redux';
import authReducer from '../modules/auth/store/reducer';
import recommendationReducer from '../modules/recomendation/store/reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    recommendations: recommendationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;