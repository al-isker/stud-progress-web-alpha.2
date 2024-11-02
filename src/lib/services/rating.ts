import { RatingItemRes } from '@/lib/types/responses';

import { api } from './api';

const profileApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: build => ({
		getRatings: build.query<RatingItemRes[], void>({
			query: () => 'rating',
			providesTags: ['rating']
		})
	})
});

export const { useGetRatingsQuery } = profileApi;
