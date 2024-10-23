import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { SERVER_URL } from '@/lib/constants/config';

export const baseApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: SERVER_URL,
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		}
	}),
	endpoints: () => ({})
});

export const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: SERVER_URL,
		credentials: 'include',
		headers: {
			Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			'Content-Type': 'application/json'
		}
	}),
	endpoints: () => ({})
});
