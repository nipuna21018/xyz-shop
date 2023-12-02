import { combineReducers } from 'redux';
import authReducer from '../modules/auth/store/reducer';
import recommendationReducer from '../modules/recomendation/store/reducer';
import {AuthTokens} from "../modules/auth/interfaces/auth-token.interface";
import {Product} from "../modules/recomendation/interfaces/product.interface";

const rootReducer = combineReducers({
    auth: authReducer,
    recommendations: recommendationReducer,
});

export interface AuthState {
    isAuthenticated: boolean,
    tokens: AuthTokens,
    error: any,
}

export interface RecommendationState {
    // Define the shape of your recommendation state
    homePageRecommendations: Product[];
    loading: boolean;
    hasMore: boolean;
    error: any;
}

export interface RootState {
    auth: AuthState;
    recommendations: RecommendationState;
}

export default rootReducer;