import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ApiService from '../../services/api.service';
import httpClient from '../../services/httpClient';

// Mock the httpClient to avoid actual network requests
jest.mock('../../services/httpClient');

describe('ApiService', () => {
    let mockAxios: MockAdapter;

    beforeEach(() => {
        mockAxios = new MockAdapter(axios);
        (httpClient as jest.MockedFunction<typeof httpClient>).mockImplementation(
            () => axios
        );
    });

    afterEach(() => {
        mockAxios.reset();
    });

    it('should handle request and response interceptors', async () => {
        const baseURL = 'https://example.com/api';
        const axiosInstance = ApiService.init(baseURL);

        // Mock a successful request
        mockAxios.onGet('/example').reply(200, { data: 'example' });

        // Perform a request
        const response = await axiosInstance.get('/example');

        // Assertions
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ data: 'example' });
    });

    it('should handle error response with responseErrorInterceptor', async () => {
        const baseURL = 'https://example.com/api';
        const axiosInstance = ApiService.init(baseURL);

        // Mock an error response
        mockAxios.onGet('/error').reply(500, { error: 'server error' });

        // Perform a request that will result in an error response
        await expect(axiosInstance.get('/error')).rejects.toThrow('Request failed with status code 500');

    });
});
