import { AuthTokens } from "../interfaces/auth-token.interface";
import AuthStorageService from './authStorage.service';
import httpClient from '../../shared/services/httpClient';

const AuthService = {
    // Method to request tokens using the login URL
    login: async (email: string, password: string): Promise<AuthTokens | null> => {
        try {
            const response = await httpClient().post(process.env.REACT_APP_AUTH_SERVICE_URL || '', { email, password });
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