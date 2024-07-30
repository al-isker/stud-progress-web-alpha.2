import { type FC } from 'react';

import { Container } from '@/components/reused/Container';
import { Limiter } from '@/components/reused/Limiter';

export const Session: FC = () => {
	return (
		<Limiter>
			<Container>Session</Container>
		</Limiter>
	);
};
