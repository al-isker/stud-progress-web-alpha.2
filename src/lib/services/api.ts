import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { SERVER_URL } from '@/lib/constants/config';

export const baseApi = createApi({
	reducerPath: 'baseApi',
	baseQuery: fetchBaseQuery({
		baseUrl: SERVER_URL,
		timeout: 30000,
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		}
	}),
	tagTypes: ['rating', 'grade', 'profile'],
	endpoints: () => ({})
});

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: SERVER_URL,
		timeout: 30000,
		credentials: 'include',
		headers: {
			// Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN_KEY)}`,
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzI5OTU0MzAxLCJleHAiOjE3Mjk5NTc5MDF9.-FoF04yMTE_Zz2hA90YJtlGEzXpiZRLH1ntkPLjgYp8',
			'Content-Type': 'application/json'
		}
	}),
	tagTypes: ['rating', 'grade', 'profile'],
	endpoints: () => ({})
});
