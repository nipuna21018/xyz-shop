import {Product} from "./product.interface";
import {ApiResponse} from "../../shared/interfaces/apiResponse.interface";

export interface Data {
    products: Product[];
}

export type RecommendationApiResponse = ApiResponse<Data>;