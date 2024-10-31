'use client';

import { ProfileData } from '@/components/ordinary/profile-data/ProfileData';
import { Container } from '@/components/reused/container/Container';
import { Limiter } from '@/components/reused/limiter/Limiter';

export const Profile = () => (
	<Limiter className='h-full'>
		<Container className='h-full pt-container'>
			<ProfileData />
		</Container>
	</Limiter>
);
