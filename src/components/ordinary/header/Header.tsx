'use client';

import { type FC } from 'react';

import { AppBar, Slide, Toolbar, useScrollTrigger } from '@mui/material';

export const Header: FC = () => {
	const isScrollDown = useScrollTrigger();

	return (
		<Slide in={!isScrollDown}>
			<AppBar position='sticky' elevation={2}>
				<Toolbar>
					<strong className='text-2xl font-extrabold text-nowrap'>
						Stud Progress
					</strong>
				</Toolbar>
			</AppBar>
		</Slide>
	);
};
