'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { AxiosError } from 'axios';
import { motion } from 'framer-motion';
import { SubmitHandler } from 'react-hook-form';

import { ROUTES } from '@/lib/constants/routes';
import { AuthService } from '@/lib/services/authService';
import { ErrorRes } from '@/lib/types/responses';
import { LoginSchema } from '@/lib/types/schemes';

import { LoginFormBody } from './LoginFormBody';
import { LoginFormHeader } from './LoginFormHeader';

const animation = {
	hide: {
		height: 0,
		opacity: 0,
		scale: 0.8
	},
	show: {
		height: 'auto',
		opacity: 1,
		scale: 1
	}
};

export const LoginForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string>();

	const router = useRouter();

	const submit: SubmitHandler<LoginSchema> = async data => {
		setIsLoading(true);

		AuthService.login(data)
			.then(res => {
				localStorage.setItem('accessToken', res.data.accessToken);

				router.replace(ROUTES.home);
			})
			.catch((err: AxiosError<ErrorRes>) => {
				setErrorMessage(err.response?.data.message);
				setIsLoading(false);
			});
	};

	return (
		<div className='h-full flex flex-col justify-center gap-y-4'>
			<LoginFormHeader loading={isLoading} />

			<motion.div
				className='overflow-hidden'
				variants={animation}
				initial='hide'
				animate={isLoading ? 'hide' : 'show'}
				transition={{
					type: 'spring',
					mass: 0.1
				}}
			>
				<LoginFormBody
					className='mx-auto'
					onSubmit={submit}
					errorMessage={errorMessage}
				/>
			</motion.div>
		</div>
	);
};
