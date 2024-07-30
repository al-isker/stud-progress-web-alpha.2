import { type FC } from 'react';

import { Container } from '@/components/reused/Container';
import { Limiter } from '@/components/reused/Limiter';

export const Dashboard: FC = () => {
	return (
		<Limiter>
			<Container>Dashboard</Container>
		</Limiter>
	);
};
