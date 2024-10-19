import { type FC } from 'react';

import { LoginForm } from '@/components/ordinary/login/LoginForm';
import { Container } from '@/components/reused/container/Container';
import { Limiter } from '@/components/reused/limiter/Limiter';
import { Main } from '@/components/reused/main/Main';

export const Login: FC = () => {
	return (
		<Main>
			<Limiter className='h-full'>
				<Container className='h-full'>
					<LoginForm />
				</Container>
			</Limiter>
		</Main>
	);
};
