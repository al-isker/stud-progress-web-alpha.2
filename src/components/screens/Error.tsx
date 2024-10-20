'use client';

import { useSearchParams } from 'next/navigation';

export const Error = () => {
	const searchParams = useSearchParams();

	const message = searchParams.get('message');

	return (
		<div className='grid h-full place-content-center p-container'>
			<p className='text-center'>{message}</p>
		</div>
	);
};
