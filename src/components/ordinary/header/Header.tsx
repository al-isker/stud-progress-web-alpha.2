'use client';

import { type FC } from 'react';

import { AppBar, Slide, Toolbar, useScrollTrigger } from '@mui/material';

import { Limiter } from '@/components/reused/Limiter';

export const Header: FC = () => {
	const isScrollDown = useScrollTrigger();

	return (
		<Slide in={!isScrollDown}>
			<AppBar position='sticky'>
				<Limiter>
					<Toolbar>
						<strong className='text-2xl font-bold tracking-wide text-nowrap'>
							Stud Progress
						</strong>
					</Toolbar>
				</Limiter>
			</AppBar>
		</Slide>
	);
};
