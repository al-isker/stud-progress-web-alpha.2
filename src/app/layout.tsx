import { type Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { type ReactNode } from 'react';

const font = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900']
});

export const metadata: Metadata = {
	title: 'Stud Progress',
	icons: { icon: '/favicon.svg' }
};

export default ({ children }: Readonly<{ children: ReactNode }>) => (
	<html lang='ru'>
		<body className={font.className}>{children}</body>
	</html>
);
