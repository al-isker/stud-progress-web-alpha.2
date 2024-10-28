export interface ErrorRes {
	error: string;
	message: string[] | string;
	statusCode: number;
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
}

export interface UpdateSemesterRes
	extends Pick<ProfileRes, 'year' | 'semester' | 'averageMark'> {}
