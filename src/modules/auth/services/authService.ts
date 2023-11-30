import axios from 'axios';
import { AuthTokens } from "../interfaces/auth-token.interface";

// Create a custom instance of Axios with specific headers
const customAxios = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1/auth/login',
    headers: {
        'Content-Type': 'application/json',
        'X-Custom-Header': 'custom-value',
    },
});

const authService = {
    // Method to request tokens using the login URL
    login: async (email: string, password: string): Promise<AuthTokens | null> => {
        try {
            const response = await customAxios.post('https://api.escuelajs.co/api/v1/auth/login', { email, password });
            const { accessToken, refreshToken } = response.data;

            // Store tokens in local storage
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

            return { accessToken, refreshToken };
        } catch (error) {
            console.error('Login failed:', error);
            return null;
        }
    },

    // Method to logout
    logout: (): void => {
        // Clear tokens from local storage
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');

        // Optionally, you may want to perform additional cleanup or redirect to a login page
        // For example, redirect to the login page
        window.location.replace('/login');
    },
};

export default authService;