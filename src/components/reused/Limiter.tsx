import { type FC, type ReactNode } from 'react';

import { maxWidth } from '@/lib/styles/maxWidth';

export const Limiter: FC<{ children: ReactNode }> = ({ children }) => (
	<div className='w-full mx-auto' style={{ maxWidth }}>
		{children}
	</div>
);
