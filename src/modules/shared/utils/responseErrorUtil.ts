import AuthService from "../../auth/services/authService";
import ApiService from "../services/api.service";
import {InternalAxiosRequestConfig} from "axios";

export const retryRequestWithNewToken = async (originalRequest: InternalAxiosRequestConfig | undefined ): Promise<any> => {
    try {

        if (!originalRequest) {
            throw new Error('Original request is undefined.');
        }

        // Unauthorized, possibly due to an expired token
        const newTokens = await AuthService.refreshAccessToken();

        // set the new token to the original request for retry
        originalRequest.headers.Authorization = `Bearer ${newTokens?.accessToken}`;

        // Retry the original request with the new access token
        const httpClientInstance= ApiService.init();
        return httpClientInstance(originalRequest);
    } catch (error) {
        // Handle error, e.g., redirect to login page, show an error message, etc.
        console.error('Retry request failed:', error);
        throw error; // Rethrow the error to signal failure to the calling code
    }
};