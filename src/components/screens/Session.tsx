import { Container } from '@/components/reused/container/Container';
import { Limiter } from '@/components/reused/limiter/Limiter';

export const Session = () => {
	return (
		<Limiter>
			<Container>Session</Container>
		</Limiter>
	);
};
