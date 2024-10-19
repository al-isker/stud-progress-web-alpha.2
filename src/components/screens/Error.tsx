'use client';

import { useSearchParams } from 'next/navigation';

export const Error = () => {
	const searchParams = useSearchParams();

	const message = searchParams.get('message');

	return (
		<div className='h-full p-container grid place-content-center'>
			<p className='text-center'>{message}</p>
		</div>
	);
};
