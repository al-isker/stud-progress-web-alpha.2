import { type FC } from 'react';

import { Container } from '@/components/reused/container/Container';
import { Limiter } from '@/components/reused/limiter/Limiter';

export const Dashboard: FC = () => {
	return (
		<Limiter>
			<Container>Dashboard</Container>
		</Limiter>
	);
};
