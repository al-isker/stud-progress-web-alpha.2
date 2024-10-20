import { SyntheticEvent } from 'react';

import {
	Alert,
	AlertProps,
	Snackbar,
	SnackbarCloseReason,
	SnackbarProps
} from '@mui/material';

interface Props
	extends Pick<SnackbarProps, 'open' | 'anchorOrigin' | 'autoHideDuration'>,
		Omit<AlertProps, 'onClose'> {
	onClose: (
		e: SyntheticEvent | Event,
		reason: SnackbarCloseReason | 'clickButton'
	) => void;
	noCloseButton?: boolean;
}

export const Message = ({
	children,
	open,
	anchorOrigin,
	autoHideDuration,
	onClose,
	title,
	noCloseButton,
	...AlertProps
}: Props) => (
	<Snackbar
		open={open}
		onClose={onClose}
		autoHideDuration={autoHideDuration}
		anchorOrigin={
			anchorOrigin ?? {
				vertical: 'top',
				horizontal: 'center'
			}
		}
	>
		<Alert
			className='shadow-md shadow-black/15'
			onClose={!noCloseButton ? e => onClose(e, 'clickButton') : undefined}
			{...AlertProps}
		>
			{children}
		</Alert>
	</Snackbar>
);
