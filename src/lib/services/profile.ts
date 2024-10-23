import { ProfileRes, UpdateSemesterRes } from '../types/responses';
import { UpdateSemesterSchema } from '../types/schemes';
import { api } from './api';

const profile = 'profile';

const profileApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: build => ({
		getStudent: build.query<ProfileRes, void>({
			query: () => ({
				url: 'http://localhost:4200/profile'
			})
		}),

		updateSemester: build.mutation<UpdateSemesterRes, UpdateSemesterSchema>({
			query: body => ({
				url: profile,
				method: 'PATCH',
				body
			})
		})
	})
});

export const { useGetStudentQuery, useUpdateSemesterMutation } = profileApi;
