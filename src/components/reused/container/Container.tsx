import { type FC, type ReactNode } from 'react';

interface Props {
	children: ReactNode;
	className?: string;
}

export const Container: FC<Props> = ({ children, className }) => (
	<div className={`w-full px-container ${className ?? ''}`}>{children}</div>
);
