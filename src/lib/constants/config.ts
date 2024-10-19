import { CreateAxiosDefaults } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API;

export const config: CreateAxiosDefaults = {
	baseURL: API_URL,
	withCredentials: true,
	timeout: 15000,
	headers: {
		'Content-Type': 'application/json'
	}
};
