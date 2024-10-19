import { type FC } from 'react';

import { Container } from '@/components/reused/container/Container';
import { Limiter } from '@/components/reused/limiter/Limiter';

export const PrivacyPolicy: FC = () => {
	return (
		<Limiter>
			<Container>Privacy Policy</Container>
		</Limiter>
	);
};
