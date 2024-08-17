'use client';

import { usePathname, useRouter } from 'next/navigation';
import { type FC, type SyntheticEvent } from 'react';

import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';

import { Limiter } from '@/components/reused/Limiter';

import { useTabs } from '@/lib/navigation/useTabs';

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
		<Paper className='sticky bottom-0 bg-none' elevation={4}>
			<Limiter>
				<BottomNavigation value={pathname} onChange={handleClickAction}>
					{tabs.map((dataTab, i) => (
						<BottomNavigationAction key={i} {...dataTab} />
					))}
				</BottomNavigation>
			</Limiter>
		</Paper>
	);
};
