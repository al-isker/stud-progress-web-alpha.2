import { Avatar } from '@/components/ordinary/avatar/Avatar';
import { Settings } from '@/components/ordinary/settings/Settings';
import { UserInfo } from '@/components/ordinary/user-info/UserInfo';
import { UserName } from '@/components/ordinary/user-name/UserName';
import { QueryWrapper } from '@/components/reused/query-wrapper/QueryWrapper';

import { useGetProfileQuery } from '@/lib/services/profile';

export const ProfileData = () => {
	const { data: student, error, isLoading, isSuccess } = useGetProfileQuery();

	return (
		<QueryWrapper error={error} isLoading={isLoading}>
			{isSuccess && (
				<div className='relative flex min-h-full flex-col gap-4'>
					<Avatar />
					<UserName name={student.fullName} />
					<UserInfo
						year={student.year}
						semester={student.semester}
						averageMark={student.averageMark}
					/>
					<Settings className='flex-grow' semester={student.semester} />
				</div>
			)}
		</QueryWrapper>
	);
};
