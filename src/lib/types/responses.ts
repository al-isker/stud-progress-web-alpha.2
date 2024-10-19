export interface ErrorRes {
	status: number;
	message: string;
}

export interface LoginRes {
	accessToken: string;
}

export interface RefreshTokenRes {
	accessToken: string;
}

export interface LogoutRes {}

export interface ProfileRes {
	fullName: string;
	year: number;
	semester: number;
	averageMark: number;
	subjectUpdatedAt: Date;
}

export interface UpdateSemesterRes
	extends Pick<ProfileRes, 'year' | 'semester' | 'averageMark'> {}
