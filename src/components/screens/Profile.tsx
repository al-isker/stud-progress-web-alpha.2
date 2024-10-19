import { type FC } from 'react';

import { Avatar } from '@/components/ordinary/avatar/Avatar';
import { Settings } from '@/components/ordinary/settings/Settings';
import { UserInfo } from '@/components/ordinary/userInfo/UserInfo';
import { UserName } from '@/components/ordinary/userName/UserName';
import { Container } from '@/components/reused/container/Container';
import { Limiter } from '@/components/reused/limiter/Limiter';

export const Profile: FC = () => {
	return (
		<Limiter className='h-full'>
			<Container className='h-full'>
				<div className='relative min-h-full pt-container flex flex-col gap-4'>
					<Avatar />
					<UserName />
					<UserInfo />
					<Settings className='flex-grow' />
				</div>
			</Container>
		</Limiter>
	);
};
