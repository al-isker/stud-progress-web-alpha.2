import axios from 'axios';

import { config } from '@/lib/constants/config';

import { AuthService } from './authService';

export const baseApi = axios.create(config);

export const api = axios.create(config);

api.interceptors.request.use(reqConfig => {
	reqConfig.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
	return reqConfig;
});

api.interceptors.response.use(
	response => response,
	async error => {
		const originalRequest = error.config;

		if (
			error.response.status === 401 &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true;

			try {
				const refreshRes = await AuthService.refreshToken();

				localStorage.setItem('accessToken', refreshRes.data.accessToken);

				return api.request(originalRequest);
			} catch {}
		}

		throw error;
	}
);
