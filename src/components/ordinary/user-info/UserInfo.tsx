import { UserInfoItem } from './UserInfoItem';

interface Props {
	year: number;
	semester: number;
	averageMark: number;
}

export const UserInfo = ({ year, semester, averageMark }: Props) => {
	return (
		<div className='flex gap-x-3'>
			<UserInfoItem number={year} caption='курс' />
			<UserInfoItem number={semester} caption='семестр' />
			<UserInfoItem number={averageMark} caption='ср. балл' />
		</div>
	);
};
