import { Container } from '@/components/reused/container/Container';
import { Limiter } from '@/components/reused/limiter/Limiter';

export const Home = () => {
	return (
		<Limiter>
			<Container>Home</Container>
		</Limiter>
	);
};
