import { RootState } from '../../../store/reducers';
import { Product } from "../interfaces/product.interface";

// Selector to check if the user is authenticated
export const getHomepageRecommendations = (state: RootState): Product[] => {
    return state.recommendations.homePageRecommendations;
};