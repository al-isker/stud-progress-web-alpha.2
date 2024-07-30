import { type FC, type ReactNode } from 'react';

const MAX_WIDTH = 1024;

export const Limiter: FC<{ children: ReactNode }> = ({ children }) => (
	<div className='w-full mx-auto' style={{ maxWidth: MAX_WIDTH }}>
		{children}
	</div>
);
