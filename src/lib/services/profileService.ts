import { ProfileRes, UpdateSemesterRes } from '../types/responses';
import { UpdateSemesterSchema } from '../types/schemes';
import { api } from './api';

class Profile {
	getData() {
		return api.get<ProfileRes>('/profile');
	}

	updateSemester(data: UpdateSemesterSchema) {
		return api.patch<UpdateSemesterRes>('/profile', data);
	}
}

export const ProfileService = new Profile();
