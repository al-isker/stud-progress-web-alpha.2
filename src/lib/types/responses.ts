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

export interface RatingItemRes {
	id: number;
	name: string;
	rating: {
		id: number;
		mark: string;
		date: Date;
		isNew: boolean;
	}[];
}
