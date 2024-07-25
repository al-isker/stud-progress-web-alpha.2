import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import { type ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Stud Progress',
	icons: { icon: '/favicon.svg' }
};

export default ({ children }: Readonly<{ children: ReactNode }>) => (
	<html lang='en'>
		<body className={inter.className}>{children}</body>
	</html>
);
