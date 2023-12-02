import axios from 'axios';
import { AuthTokens } from "../interfaces/auth-token.interface";
import AuthStorageService from './authStorage.service';

// Create a custom instance of Axios with specific headers
const customAxios = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1/auth/login',
    headers: {
        'Content-Type': 'application/json',
        'X-Custom-Header': 'custom-value',
    },
});

const AuthService = {
    // Method to request tokens using the login URL
    login: async (email: string, password: string): Promise<AuthTokens | null> => {
        try {
            const response = await customAxios.post('https://api.escuelajs.co/api/v1/auth/login', { email, password });
            const authTokens: AuthTokens = {
                accessToken: response?.data?.access_token,
                refreshToken: response?.data?.refresh_token
            };

            // Store tokens in local storage
            AuthStorageService.setAuthTokens(authTokens);

            return authTokens;
        } catch (error) {
            console.error('Login failed:', error);
            return null;
        }
    },

    // Method to logout
    logout: (): void => {
        // Clear tokens from local storage
        AuthStorageService.removeAuthTokens();

        // Redirect to the login page
        window.location.replace('/login');
    },
};

export default AuthService;