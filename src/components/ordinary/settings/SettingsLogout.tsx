'use client';

import { useRouter } from 'next/navigation';

import { LogoutOutlined } from '@mui/icons-material';

import { MenuItem } from '@/components/reused/menu-item/MenuItem';
import { QueryErrorMessage } from '@/components/reused/query-error-message/QueryErrorMessage';

import { ACCESS_TOKEN_KEY } from '@/lib/constants/localStorage';
import { ROUTES } from '@/lib/constants/routes';
import { useLogoutMutation } from '@/lib/services/auth';

export const SettingsLogout = () => {
	const [logout, { error, isLoading }] = useLogoutMutation();

	const router = useRouter();

	const handleClick = () => {
		logout()
			.unwrap()
			.then(() => {
				localStorage.removeItem(ACCESS_TOKEN_KEY);

				router.replace(ROUTES.login);
			});
	};

	return (
		<>
			<QueryErrorMessage error={error} />

			<MenuItem
				icon={<LogoutOutlined className='rotate-180' />}
				text='Выйти'
				onClick={handleClick}
				loading={isLoading}
			/>
		</>
	);
};
