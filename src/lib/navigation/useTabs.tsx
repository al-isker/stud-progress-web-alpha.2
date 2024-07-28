import {
	DonutLarge,
	HomeRounded,
	PersonRounded,
	SchoolRounded
} from '@mui/icons-material';
import { Badge } from '@mui/material';

import { ROUTES } from '@/lib/navigation/routes';

interface Arguments {
	isHomeNew?: boolean;
	isSessionNew?: boolean;
}

export const useTabs = (badges?: Arguments) => {
	const { isHomeNew, isSessionNew } = badges ?? {};

	return [
		{
			label: 'Главная',
			value: ROUTES.home,
			icon: (
				<Badge color='primary' variant='dot' invisible={!isHomeNew}>
					<HomeRounded />
				</Badge>
			)
		},
		{
			label: 'Сессия',
			value: ROUTES.session,
			icon: (
				<Badge color='primary' variant='dot' invisible={!isSessionNew}>
					<SchoolRounded />
				</Badge>
			)
		},
		{
			label: 'Статистика',
			value: ROUTES.dashboard,
			icon: <DonutLarge />
		},
		{
			label: 'Профиль',
			value: ROUTES.profile,
			icon: <PersonRounded />
		}
	];
};
