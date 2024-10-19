'use client';

import { usePathname, useRouter } from 'next/navigation';
import { type FC, type SyntheticEvent } from 'react';

import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';

import { useTabs } from '@/components/other/useTabs';
import { Limiter } from '@/components/reused/limiter/Limiter';

export const Navigation: FC = () => {
	const pathname = usePathname();
	const router = useRouter();

	const handleClickAction = (_: SyntheticEvent, route: string) => {
		router.push(route);
	};

	const tabs = useTabs({
		// isHomeNew: true,
		// isSessionNew: false
	});

	return (
		<>
			<div className='min-h-14' />
			<Paper className='w-full fixed bottom-0 bg-none' elevation={4}>
				<Limiter>
					<BottomNavigation
						className='h-14'
						component='nav'
						value={pathname}
						onChange={handleClickAction}
					>
						{tabs.map((tab, i) => (
							<BottomNavigationAction
								key={i}
								value={tab.href}
								label={tab.text}
								icon={tab.icon}
							/>
						))}
					</BottomNavigation>
				</Limiter>
			</Paper>
		</>
	);
};
