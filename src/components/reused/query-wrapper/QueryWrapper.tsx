import { ReactNode } from 'react';

import { Loader } from '../loader/Loader';

interface Props {
	children: ReactNode;
	isLoading?: boolean;
	error?: any;
}

export const QueryWrapper = ({ children, isLoading, error }: Props) => {
	if (isLoading) return <Loading />;
	else if (error) return <Error />;
	else return children;
};

const Loading = () => (
	<div className='grid h-full w-full place-content-center'>
		<Loader className='h-12 text-primary' />
	</div>
);

const Error = () => <div>error</div>;
