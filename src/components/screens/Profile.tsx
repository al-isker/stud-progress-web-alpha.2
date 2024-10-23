'use client';

import { Avatar } from '@/components/ordinary/avatar/Avatar';
import { Settings } from '@/components/ordinary/settings/Settings';
import { UserInfo } from '@/components/ordinary/user-info/UserInfo';
import { UserName } from '@/components/ordinary/user-name/UserName';
import { Container } from '@/components/reused/container/Container';
import { Limiter } from '@/components/reused/limiter/Limiter';

import { useGetStudentQuery } from '@/lib/services/profile';

import { QueryWrapper } from '../reused/query-wrapper/QueryWrapper';

export const Profile = () => {
	const { data: student, isLoading, error, isSuccess } = useGetStudentQuery();

	return (
		<Limiter className='h-full'>
			<Container className='h-full'>
				<QueryWrapper isLoading={isLoading} error={error}>
					{isSuccess && (
						<div className='relative flex min-h-full flex-col gap-4 pt-container'>
							<Avatar />
							<UserName name={student!.fullName} />
							<UserInfo
								year={student!.year}
								semester={student!.semester}
								averageMark={student!.averageMark}
							/>
							<Settings className='flex-grow' />
						</div>
					)}
				</QueryWrapper>
			</Container>
		</Limiter>
	);
};
