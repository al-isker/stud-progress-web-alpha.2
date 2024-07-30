import { type FC } from 'react';

import { Container } from '@/components/reused/Container';
import { Limiter } from '@/components/reused/Limiter';

export const Home: FC = () => {
	return (
		<Limiter>
			<Container>Home</Container>
		</Limiter>
	);
};
