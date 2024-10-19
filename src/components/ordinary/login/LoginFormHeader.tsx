import { motion } from 'framer-motion';

import { Loader } from '@/components/reused/loader/Loader';
import { Title } from '@/components/reused/title/Title';

export const LoginFormHeader = ({ loading }: { loading: boolean }) => {
	return (
		<div className='text-center'>
			<div className='text-primary'>
				{loading ? (
					<Loader className='h-12 mb-2' />
				) : (
					<motion.img
						className='h-14 inline-block'
						src='/favicon.svg'
						alt='stud-progress'
						initial={{ rotate: '-90deg' }}
						animate={{ rotate: 0 }}
						transition={{
							type: 'spring',
							mass: 0.1
						}}
					/>
				)}
			</div>

			<Title />
		</div>
	);
};
