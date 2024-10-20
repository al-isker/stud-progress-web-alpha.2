import { type FC, type ReactNode } from 'react';

import cn from 'clsx';

interface Props {
	children: ReactNode;
	className?: string;
}

export const Container: FC<Props> = ({ children, className }) => (
	<div className={cn('w-full px-container', className)}>{children}</div>
);
