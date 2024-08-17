import { type FC } from 'react';

import { Avatar } from '@/components/ordinary/avatar/Avatar';
import { Container } from '@/components/reused/Container';
import { Limiter } from '@/components/reused/Limiter';

const USER = {
	fullName: 'Султани Ахмадзаир Шахвали',
	currentSemester: '000000003'
};

export const Profile: FC = () => {
	return (
		<Limiter>
			<Container>
				<Avatar />
			</Container>
		</Limiter>
	);
};
