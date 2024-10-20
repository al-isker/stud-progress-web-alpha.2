'use client';

import { usePathname, useRouter } from 'next/navigation';
import { SyntheticEvent } from 'react';

import {
	BottomNavigationAction,
	BottomNavigation as BottomNavigationMUI,
	Paper
} from '@mui/material';

import { useTabs } from '@/components/other/useTabs';
import { Limiter } from '@/components/reused/limiter/Limiter';

export const BottomNavigation = () => {
	const pathname = usePathname();
	const router = useRouter();

	const handleChange = (_: SyntheticEvent, route: string) => {
		router.push(route);
	};

	const tabs = useTabs({
		// isHomeNew: true,
		// isSessionNew: false
	});

	return (
		<>
			<div className='min-h-14' />
			<Paper className='fixed bottom-0 w-full bg-none' elevation={4}>
				<Limiter>
					<BottomNavigationMUI
						className='h-14'
						component='nav'
						value={pathname}
						onChange={handleChange}
					>
						{tabs.map((tab, i) => (
							<BottomNavigationAction
								key={i}
								value={tab.href}
								label={tab.text}
								icon={tab.icon}
							/>
						))}
					</BottomNavigationMUI>
				</Limiter>
			</Paper>
		</>
	);
};
