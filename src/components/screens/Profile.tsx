import { Avatar } from '@/components/ordinary/avatar/Avatar';
import { Settings } from '@/components/ordinary/settings/Settings';
import { UserInfo } from '@/components/ordinary/user-info/UserInfo';
import { UserName } from '@/components/ordinary/user-name/UserName';
import { Container } from '@/components/reused/container/Container';
import { Limiter } from '@/components/reused/limiter/Limiter';

export const Profile = () => (
	<Limiter className='h-full'>
		<Container className='h-full'>
			<div className='relative flex min-h-full flex-col gap-4 pt-container'>
				<Avatar />
				<UserName />
				<UserInfo />
				<Settings className='flex-grow' />
			</div>
		</Container>
	</Limiter>
);
