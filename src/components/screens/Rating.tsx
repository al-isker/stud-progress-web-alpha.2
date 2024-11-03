import { Container } from '@/components/reused/container/Container';
import { Limiter } from '@/components/reused/limiter/Limiter';

export const Rating = () => {
	return (
		<Limiter>
			<Container className='pt-container'>Rating</Container>
		</Limiter>
	);
};
