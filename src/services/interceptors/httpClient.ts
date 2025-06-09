import axios, { AxiosInstance } from 'axios';

import { GITHUB_API_URL } from '@/constants/configs';

import { requestErrorInterceptor, requestInterceptor } from './Request';
import { responseErrorInterceptor, responseInterceptor } from './Response';

const httpClient: AxiosInstance = axios.create({
    baseURL: GITHUB_API_URL,
});

httpClient.interceptors.request.use(requestInterceptor, requestErrorInterceptor);
httpClient.interceptors.response.use(responseInterceptor, responseErrorInterceptor);

export default httpClient;
