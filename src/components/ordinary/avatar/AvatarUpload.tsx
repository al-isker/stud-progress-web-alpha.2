import { memo, useRef } from 'react';

import { Avatar as AvatarMUI } from '@mui/material';

import { Upload } from '@/components/fields/simple/Upload';

import { AvatarActions } from './AvatarActions';

interface Props {
	avatar?: string;
	onUpload: (file: File) => void;
	onDelete: () => void;
	onInfo: () => void;
}

export const AvatarUpload = memo(function AvatarUpload({
	avatar,
	onUpload,
	onDelete,
	onInfo
}: Props) {
	const uploadRef = useRef<HTMLInputElement>(null);

	return (
		<>
			<Upload ref={uploadRef} accept='.png,.jpg' onUpload={onUpload} />

			<AvatarActions
				className='absolute -right-1.5 top-0'
				onClickUpload={() => uploadRef.current?.click()}
				onClickDelete={onDelete}
				onClickInfo={onInfo}
			/>

			<AvatarMUI
				className='mx-auto min-h-48 min-w-48 shrink shadow-mui-2'
				src={avatar}
				alt='Аватар студента'
			/>
		</>
	);
});
