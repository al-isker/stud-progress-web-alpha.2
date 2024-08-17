import { FC, memo } from 'react';

import { Edit } from '@mui/icons-material';
import { Avatar as AvatarMUI, IconButton } from '@mui/material';

import { Upload } from '@/components/fields/Upload';

interface Props {
	avatar?: string;
	onChange: (file: File) => void;
}

export const AvatarUpload: FC<Props> = memo(({ avatar, onChange }) => (
	<div className='relative py-4'>
		<Upload
			className='absolute right-0 top-0'
			accept='.png,.jpg'
			onChange={onChange}
		>
			<IconButton>
				<Edit fontSize='small' />
			</IconButton>
		</Upload>

		<AvatarMUI
			className='mx-auto w-48 h-48 shadow-md'
			src={avatar}
			alt='Аватар'
		/>
	</div>
));
