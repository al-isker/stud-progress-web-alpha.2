'use client';

import { usePathname, useRouter } from 'next/navigation';
import { type FC, type SyntheticEvent } from 'react';

import {
	DonutLarge,
	HomeRounded,
	PersonRounded,
	SchoolRounded
} from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';

import { ROUTES } from '@/lib/constants/routes';

export const Navigation: FC = () => {
	const pathname = usePathname();
	const router = useRouter();

	const handleClickAction = (_: SyntheticEvent, route: string) => {
		router.push(route);
	};

	return (
		<Paper className='sticky bottom-0' elevation={4}>
			<BottomNavigation value={pathname} onChange={handleClickAction}>
				<BottomNavigationAction
					label='Главная'
					value={ROUTES.home}
					icon={<HomeRounded />}
				/>
				<BottomNavigationAction
					label='Сессия'
					value={ROUTES.session}
					icon={<SchoolRounded />}
				/>
				<BottomNavigationAction
					label='Статистика'
					value={ROUTES.dashboard}
					icon={<DonutLarge />}
				/>
				<BottomNavigationAction
					label='Профиль'
					value={ROUTES.profile}
					icon={<PersonRounded />}
				/>
			</BottomNavigation>
		</Paper>
	);
};
