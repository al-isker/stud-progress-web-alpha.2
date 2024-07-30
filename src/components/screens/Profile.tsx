import { type FC } from 'react';

import { Container } from '@/components/reused/Container';
import { Limiter } from '@/components/reused/Limiter';

export const Profile: FC = () => {
	return (
		<Limiter>
			<Container>Profile</Container>
		</Limiter>
	);
};
