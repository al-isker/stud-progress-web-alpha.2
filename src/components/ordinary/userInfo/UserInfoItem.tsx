import { type FC } from 'react';

import { Container } from '@/components/reused/container/Container';

interface Props {
	number: number;
	caption: string;
}

export const UserInfoItem: FC<Props> = ({ number, caption }) => {
	return (
		<div className='w-full py-3 shadow-sm bg-as-bg-default rounded'>
			<Container className='flex flex-col items-center'>
				<span className='text-2xl font-bold text-as-text-primary/80'>
					{number}
				</span>
				<span className='tracking-wide text-as-text-primary/70 text-nowrap'>
					{caption}
				</span>
			</Container>
		</div>
	);
};
