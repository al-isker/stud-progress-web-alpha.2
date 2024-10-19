import { type FC } from 'react';

import { AppBar, Toolbar } from '@mui/material';

import { Limiter } from '@/components/reused/limiter/Limiter';
import { Title } from '@/components/reused/title/Title';

export const Header: FC = () => {
	return (
		<AppBar position='sticky'>
			<Limiter>
				<Toolbar>
					<Title />
				</Toolbar>
			</Limiter>
		</AppBar>
	);
};
