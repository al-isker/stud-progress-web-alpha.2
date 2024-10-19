'use client';

import { type FC, useCallback } from 'react';

import { Lock } from '@mui/icons-material';

import { Button } from '@/components/reused/button/Button';
import { Dialog } from '@/components/reused/dialog/Dialog';
import { Message } from '@/components/reused/message/Message';

import { avatarMaxSize, avatarPath } from '@/lib/constants/localStorage';
import { useLocaleImage } from '@/lib/hooks/useLocalImage';
import { useShowHide } from '@/lib/hooks/useShowHide';

import { AvatarUpload } from './AvatarUpload';

export const Avatar: FC = () => {
	const {
		image: avatar,
		setImage: setAvatar,
		removeImage: removeAvatar,
		error
	} = useLocaleImage(avatarPath, avatarMaxSize);

	const info = useShowHide();

	const handleUpload = useCallback(setAvatar, []);
	const handleDelete = useCallback(removeAvatar, []);
	const handleInfo = useCallback(info.show, []);

	return (
		<>
			<Message
				severity='error'
				open={error.isShow}
				onClose={error.hide}
				autoHideDuration={3000}
				noCloseButton
			>
				{error.message}
			</Message>

			<Dialog
				icon={<Lock />}
				title='Фото профиля'
				text='Ваше фото профиля будете видеть только Вы'
				open={info.isShow}
				onClose={info.hide}
				actions={<Button onClick={info.hide}>Закрыть</Button>}
			/>

			<AvatarUpload
				avatar={avatar}
				onUpload={handleUpload}
				onDelete={handleDelete}
				onInfo={handleInfo}
			/>
		</>
	);
};
