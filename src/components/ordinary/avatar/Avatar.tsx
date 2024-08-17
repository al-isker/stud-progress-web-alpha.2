'use client';

import { type FC, useCallback } from 'react';

import { Snackbar } from '@mui/material';

import { useLocaleImage } from '@/lib/hooks/useLocalImage';

import { AvatarUpload } from './AvatarUpload';

export const Avatar: FC = () => {
	const {
		localImage: avatar,
		setLocalImage: setAvatar,
		error
	} = useLocaleImage('avatar');

	const handleChangeUpload = useCallback((file: File) => {
		setAvatar(file);
	}, []);

	return (
		<>
			<Snackbar
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
				autoHideDuration={3000}
				message={error.message}
				open={error.isOpen}
				onClose={error.close}
			/>
			<AvatarUpload avatar={avatar} onChange={handleChangeUpload} />
		</>
	);
};
