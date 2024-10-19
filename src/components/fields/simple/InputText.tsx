import { type FC } from 'react';

import { TextField, type TextFieldProps } from '@mui/material';

type Props = TextFieldProps;

export const InputText: FC<Props> = ({ ...TextFieldProps }) => (
	<TextField fullWidth {...TextFieldProps} />
);

export type InputTextProps = Props;
