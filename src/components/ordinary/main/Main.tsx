import { type FC, type ReactNode } from 'react';

export const Main: FC<{ children: ReactNode }> = ({ children }) => {
	return <main className='py-3'>{children}</main>;
};
