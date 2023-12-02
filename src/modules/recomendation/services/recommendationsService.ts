import ApiService from "../../shared/services/api.service";
import {AxiosResponse} from "axios";
import {RecommendationApiResponse} from "../interfaces/recApiResponse.interface";

const recommendationPath = 'recommend/items';

const RecommendationService = {
    // method to get recommended products
    getHomePageRec: async (page = 1): Promise<RecommendationApiResponse | null> => {
        try {
            const api = ApiService.init();
            const params = { page };
            const response: AxiosResponse<RecommendationApiResponse> = await api.get(recommendationPath, { params });

            return response.data;
        } catch (error) {
            console.error(' failed:', error);
            return null;
        }
    },
};

export default RecommendationService;