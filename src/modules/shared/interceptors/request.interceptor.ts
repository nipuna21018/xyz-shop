import { InternalAxiosRequestConfig } from "axios";
import { HTTP_HEADER_KEY_AUTHORIZATION, HTTP_HEADER_VALUE_PREFIX_AUTHORIZATION } from "../constants";
import AuthStorageService from "../../auth/services/authStorage.service";

const requestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const { accessToken } = AuthStorageService.getAuthTokens();
    if (accessToken) {
        config.headers[HTTP_HEADER_KEY_AUTHORIZATION] = `${HTTP_HEADER_VALUE_PREFIX_AUTHORIZATION} ${accessToken}`;
    }
    return config;
};

export default requestInterceptor;