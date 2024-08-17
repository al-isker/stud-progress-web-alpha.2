import { type ChangeEvent, type FC, type ReactNode, useRef } from 'react';

interface Props {
	children: ReactNode;
	className?: string;
	accept?: string;
	name?: string;
	onChange: (value: File) => void;
}

export const Upload: FC<Props> = ({
	children,
	className,
	accept,
	name,
	onChange
}) => {
	const uploadRef = useRef<HTMLInputElement>(null);

	const handleClickChildren = () => {
		uploadRef.current?.click();
	};

	const handleChangeUpload = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];

		if (file) {
			onChange(file);
		}

		(e.target as HTMLInputElement).value = '';
	};

	return (
		<div className={className} onClick={handleClickChildren}>
			{children}

			<input
				ref={uploadRef}
				className='hidden'
				type='file'
				accept={accept}
				name={name}
				onChange={handleChangeUpload}
			/>
		</div>
	);
};
