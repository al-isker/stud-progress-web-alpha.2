import { type FC, type ReactNode } from 'react';

import { BREAKPOINTS } from '@/lib/styles/style';

interface Props {
	children: ReactNode;
	className?: string;
}

export const Limiter: FC<Props> = ({ children, className }) => (
	<div
		className={`${className ?? ''} w-full mx-auto`}
		style={{ maxWidth: BREAKPOINTS.max }}
	>
		{children}
	</div>
);
