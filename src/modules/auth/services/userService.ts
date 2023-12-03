import ApiService from "../../shared/services/api.service";
import {AxiosResponse} from "axios";
import { User } from "../interfaces/user.interface";

const userPath = '/profile';

const UserService = {
    // method to get ger user profile
    getUser: async (page = 1): Promise<User | null> => {
        try {
            const api = ApiService.init(process.env.REACT_APP_AUTH_SERVICE_URL);
            const params = { page };
            const response: AxiosResponse<User> = await api.get(userPath);
            return response.data;
        } catch (error) {
            console.error('Get user profile failed:', error);
            return null;
        }
    },
};

export default UserService;