import { type Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import { type ReactNode } from 'react';

const font = IBM_Plex_Sans({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700'],
	variable: '--font-primary'
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
