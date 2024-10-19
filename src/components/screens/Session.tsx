import { type FC } from 'react';

import { Container } from '@/components/reused/container/Container';
import { Limiter } from '@/components/reused/limiter/Limiter';

export const Session: FC = () => {
	return (
		<Limiter>
			<Container>Session</Container>
		</Limiter>
	);
};
