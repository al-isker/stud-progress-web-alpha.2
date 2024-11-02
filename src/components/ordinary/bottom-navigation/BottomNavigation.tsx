'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
	DonutLarge,
	HomeRounded,
	PersonRounded,
	SchoolRounded
} from '@mui/icons-material';
import {
	BottomNavigationAction,
	BottomNavigation as BottomNavigationMUI,
	Paper
} from '@mui/material';

import { Limiter } from '@/components/reused/limiter/Limiter';

import { TAB_ROUTES } from '@/lib/constants/routes';

import { BadgeDashboard } from './BadgeDashboard';
import { BadgeHome } from './BadgeHome';
import { BadgeProfile } from './BadgeProfile';
import { BadgeSession } from './BadgeSession';

const TABS = [
	{
		label: 'Главная',
		href: TAB_ROUTES.rating,
		icon: (
			<BadgeHome>
				<HomeRounded />
			</BadgeHome>
		)
	},
	{
		label: 'Сессия',
		href: TAB_ROUTES.session,
		icon: (
			<BadgeSession>
				<SchoolRounded />
			</BadgeSession>
		)
	},
	{
		label: 'Статистика',
		href: TAB_ROUTES.dashboard,
		icon: (
			<BadgeDashboard>
				<DonutLarge />
			</BadgeDashboard>
		)
	},
	{
		label: 'Профиль',
		href: TAB_ROUTES.profile,
		icon: (
			<BadgeProfile>
				<PersonRounded />
			</BadgeProfile>
		)
	}
];

export const BottomNavigation = () => {
	const pathname = usePathname();

	const findActiveTab = () => {
		return Object.values(TAB_ROUTES).find(route => pathname.includes(route));
	};

	return (
		<>
			<div className='min-h-14' />
			<Paper className='fixed bottom-0 w-full bg-none' elevation={4}>
				<Limiter>
					<BottomNavigationMUI
						className='h-14'
						component='nav'
						value={findActiveTab()}
					>
						{TABS.map((tab, i) => (
							<BottomNavigationAction
								key={i}
								LinkComponent={Link}
								label={tab.label}
								href={tab.href}
								value={tab.href}
								icon={tab.icon}
							/>
						))}
					</BottomNavigationMUI>
				</Limiter>
			</Paper>
		</>
	);
};
