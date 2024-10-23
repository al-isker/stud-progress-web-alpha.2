import { CreateAxiosDefaults } from 'axios';

export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const config: CreateAxiosDefaults = {
	baseURL: SERVER_URL,
	withCredentials: true,
	timeout: 15000,
	headers: {
		'Content-Type': 'application/json'
	}
};
