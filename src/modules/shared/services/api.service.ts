import { AxiosInstance } from 'axios';
import responseErrorInterceptor from "../interceptors/responseError.interceptor";
import responseInterceptor from "../interceptors/response.interceptor";
import requestInterceptor from "../interceptors/request.interceptor";
import httpClient from "./httpClient";


const ApiService = {
    // Function to create Axios instance with interceptors
    init: (baseURL?: string)
        :
        AxiosInstance => {
        const instance = httpClient(baseURL || process.env.REACT_APP_API_BASE_URL);

        // Add interceptors
        instance.interceptors.request.use(requestInterceptor);
        instance.interceptors.response.use(responseInterceptor, responseErrorInterceptor);

        return instance;
    }

}
export default ApiService;