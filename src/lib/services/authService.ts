import { LoginSchema } from '@/lib/types/schemes';

import { LoginRes, LogoutRes, RefreshTokenRes } from '../types/responses';
import { api, baseApi } from './api';

class Auth {
	login(data: LoginSchema) {
		return baseApi.post<LoginRes>('/auth/login', data);
	}

	refreshToken() {
		return baseApi.post<RefreshTokenRes>('/auth/refresh-token');
	}

	logout() {
		return api.post<LogoutRes>('/auth/logout');
	}
}

export const AuthService = new Auth();
