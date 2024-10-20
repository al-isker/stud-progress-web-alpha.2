import { Metadata, NextPage } from 'next';

import { Error } from '@/components/screens/Error';

export const metadata: Metadata = {
	title: 'Ошибка'
};

const ErrorPage: NextPage = () => <Error />;

export default ErrorPage;
