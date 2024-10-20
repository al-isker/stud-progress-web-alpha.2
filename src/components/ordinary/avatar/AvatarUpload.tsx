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
				className='absolute top-5 right-0'
				onClickUpload={() => uploadRef.current?.click()}
				onClickDelete={onDelete}
				onClickInfo={onInfo}
			/>

			<AvatarMUI
				className='shrink mx-auto min-w-48 min-h-48 shadow-mui-2'
				src={avatar}
				alt='Аватар студента'
			/>
		</>
	);
});
