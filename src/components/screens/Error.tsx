'use client';

import { useSearchParams } from 'next/navigation';

import { Container } from '@/components/reused/container/Container';

export const Error = () => {
	const searchParams = useSearchParams();

	const message = searchParams.get('message');

	return (
		<Container className='grid h-full place-content-center'>
			<p className='text-center'>{message}</p>
		</Container>
	);
};
