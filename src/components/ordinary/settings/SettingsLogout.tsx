'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { LogoutOutlined } from '@mui/icons-material';

import { MenuItem } from '@/components/reused/menu-item/MenuItem';

import { ROUTES } from '@/lib/constants/routes';
import { AuthService } from '@/lib/services/authService';

export const SettingsLogout = () => {
	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();

	const handleClick = async () => {
		setIsLoading(true);

		AuthService.logout().then(() => router.replace(ROUTES.login));
	};

	return (
		<MenuItem
			icon={<LogoutOutlined className='rotate-180' />}
			text='Выйти'
			onClick={handleClick}
			loading={isLoading}
		/>
	);
};
