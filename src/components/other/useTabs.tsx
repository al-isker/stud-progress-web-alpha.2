import {
	DonutLarge,
	HomeRounded,
	PersonRounded,
	SchoolRounded
} from '@mui/icons-material';
import { Badge } from '@mui/material';

import { ROUTES } from '@/lib/constants/routes';

interface IsBadge {
	home?: boolean;
	session?: boolean;
}

export const useTabs = (badge: IsBadge = {}) => {
	return [
		{
			text: 'Главная',
			href: ROUTES.home,
			icon: (
				<Badge color='primary' variant='dot' invisible={!badge.home}>
					<HomeRounded />
				</Badge>
			)
		},
		{
			text: 'Сессия',
			href: ROUTES.session,
			icon: (
				<Badge color='primary' variant='dot' invisible={!badge.session}>
					<SchoolRounded />
				</Badge>
			)
		},
		{
			text: 'Статистика',
			href: ROUTES.dashboard,
			icon: <DonutLarge />
		},
		{
			text: 'Профиль',
			href: ROUTES.profile,
			icon: <PersonRounded />
		}
	];
};
