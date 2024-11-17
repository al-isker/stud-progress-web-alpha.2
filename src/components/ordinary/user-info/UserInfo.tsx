import { averageMarkFormatter } from '@/lib/utils/averageMarkFormatter';

import { UserInfoItem } from './UserInfoItem';

interface Props {
	year: number;
	semester: number;
	averageMark: number;
}

export const UserInfo = ({ year, semester, averageMark }: Props) => (
	<div className='flex gap-x-3'>
		<UserInfoItem number={year} caption='курс' />
		<UserInfoItem number={semester} caption='семестр' />
		<UserInfoItem
			number={averageMarkFormatter(averageMark)}
			caption='ср. балл'
		/>
	</div>
);
