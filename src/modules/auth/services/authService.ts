import { AuthTokens } from "../interfaces/auth-token.interface";
import AuthStorageService from './authStorage.service';
import httpClient from '../../shared/services/httpClient';

const loginPath = 'login';
const refreshTokenPath = 'refresh-token';

const AuthService = {
    // Method to request tokens using the login URL
    login: async (email: string, password: string): Promise<AuthTokens | null> => {
        try {
            const response = await httpClient(process.env.REACT_APP_AUTH_SERVICE_URL).post(loginPath, { email, password });
            const authTokens: AuthTokens = {
                accessToken: response?.data?.access_token,
                refreshToken: response?.data?.refresh_token
            };

            // Store tokens in local storage
            AuthStorageService.setAuthTokens(authTokens);

            return authTokens;
        } catch (error) {
            throw new Error('Email or password incorrect.');
        }
    },

    // Method to refresh tokens using refreshToken
    refreshAccessToken: async (): Promise<AuthTokens | null> => {
        try {
            const { refreshToken } = AuthStorageService.getAuthTokens();
            const response = await httpClient(process.env.REACT_APP_AUTH_SERVICE_URL).post(refreshTokenPath, { refreshToken });
            const authTokens: AuthTokens = {
                accessToken: response?.data?.access_token,
                refreshToken: response?.data?.refresh_token
            };

            // Store tokens in local storage
            AuthStorageService.setAuthTokens(authTokens);

            return authTokens;
        } catch (error) {
            throw error;
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