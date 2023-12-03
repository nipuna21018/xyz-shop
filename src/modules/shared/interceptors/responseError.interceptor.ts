import { retryRequestWithNewToken } from "../utils/responseErrorUtil";
import { AxiosError } from "axios";

const responseErrorInterceptor = async (error: any): Promise<any> => {
    const { response, config } = error as AxiosError;

    if (response && response.status === 401) {
        // Retry the request with a new token
        await retryRequestWithNewToken(config);
    }

    if (response && response.status === 403) {
        //@todo: handle this error as needed. 403 can be used with permission handling
    }

    if (response && response.status === 500) {
        //@todo: log the error or show notification to handle the server side errors
    }

    return Promise.reject(error);
};

export default responseErrorInterceptor