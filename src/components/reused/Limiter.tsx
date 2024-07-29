import { type FC, type ReactNode } from 'react';

import { maxWidth } from '@/lib/styles/maxWidth';

export const Limiter: FC<{ children: ReactNode }> = ({ children }) => (
	<div className={`max-w-screen-${maxWidth} w-full mx-auto`}>{children}</div>
);
