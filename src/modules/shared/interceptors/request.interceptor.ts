import {InternalAxiosRequestConfig} from "axios";
import {HTTP_HEADER_KEY_AUTHORIZATION} from "../constants";

const requestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    config.headers[HTTP_HEADER_KEY_AUTHORIZATION] = 'Bearer your_token';
    return config;
};

export default requestInterceptor;