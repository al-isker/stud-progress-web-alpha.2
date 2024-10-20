import { AppBar, Toolbar } from '@mui/material';

import { Limiter } from '@/components/reused/limiter/Limiter';
import { Title } from '@/components/reused/title/Title';

export const Header = () => (
	<AppBar position='sticky'>
		<Limiter>
			<Toolbar>
				<Title />
			</Toolbar>
		</Limiter>
	</AppBar>
);
