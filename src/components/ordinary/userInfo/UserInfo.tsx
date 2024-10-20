import { UserInfoItem } from './UserInfoItem';

export const UserInfo = () => {
	return (
		<div className='flex gap-x-3'>
			<UserInfoItem number={3} caption='курс' />
			<UserInfoItem number={5} caption='семестр' />
			<UserInfoItem number={4.1} caption='ср. балл' />
		</div>
	);
};
