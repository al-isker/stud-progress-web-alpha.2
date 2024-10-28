import { ProfileRes, UpdateSemesterRes } from '../types/responses';
import { UpdateSemesterSchema } from '../types/schemes';
import { api } from './api';

const profileApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: build => ({
		getProfile: build.query<ProfileRes, void>({
			query: () => 'profile',
			providesTags: ['profile']
		}),

		updateSemester: build.mutation<UpdateSemesterRes, UpdateSemesterSchema>({
			query: body => ({
				url: 'profile/update-semester',
				method: 'PATCH',
				body: body
			}),
			async onQueryStarted(_, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					dispatch(
						profileApi.util.updateQueryData('getProfile', undefined, draft => {
							Object.assign(draft, data);
						})
					);
				} catch {}
			},
			invalidatesTags: ['rating', 'grade']
		})
	})
});

export const { useGetProfileQuery, useUpdateSemesterMutation } = profileApi;
