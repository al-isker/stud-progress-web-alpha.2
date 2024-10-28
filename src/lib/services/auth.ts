import { LoginRes, LogoutRes, RefreshTokenRes } from '../types/responses';
import { LoginSchema } from '../types/schemes';
import { baseApi } from './api';

export const authApi = baseApi.injectEndpoints({
	overrideExisting: true,
	endpoints: build => ({
		login: build.mutation<LoginRes, LoginSchema>({
			query: body => ({
				url: 'auth/login',
				method: 'POST',
				body
			}),
			invalidatesTags: ['rating', 'grade', 'profile']
		}),

		refreshToken: build.mutation<RefreshTokenRes, void>({
			query: () => ({
				url: 'auth/refresh-token',
				method: 'POST'
			})
		}),

		logout: build.mutation<LogoutRes, void>({
			query: () => ({
				url: 'auth/logout',
				method: 'POST'
			})
		})
	})
});

export const { useLoginMutation, useRefreshTokenMutation, useLogoutMutation } =
	authApi;
