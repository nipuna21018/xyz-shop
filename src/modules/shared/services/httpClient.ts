import axios, { AxiosInstance } from "axios";
import { HTTP_HEADER_KEY_ACCEPT, HTTP_HEADER_KEY_CONTENT_TYPE, HTTP_HEADER_VALUE_ACCEPT, HTTP_HEADER_VALUE_CONTENT_TYPE } from "../constants";

const httpClient = (baseURL?: string, headers?: Record<string, string>): AxiosInstance => {
    const instance = axios.create({
        baseURL,
        headers
    });

    // Set common headers
    instance.defaults.headers.common[HTTP_HEADER_KEY_CONTENT_TYPE] = HTTP_HEADER_VALUE_CONTENT_TYPE;
    instance.defaults.headers.common[HTTP_HEADER_KEY_ACCEPT] = HTTP_HEADER_VALUE_ACCEPT;

    return instance;
};

export default httpClient;