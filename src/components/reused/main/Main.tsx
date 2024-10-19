import { type FC, type ReactNode } from 'react';

export const Main: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<main className='bg-gradient-to-b from-primary-light/5 to-primary-light/10'>
			{children}
		</main>
	);
};
