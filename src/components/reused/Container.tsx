import { type FC, type ReactNode } from 'react';

import { Container as ContainerMUI } from '@mui/material';

import { maxWidth } from '@/lib/styles/maxWidth';

export const Container: FC<{ children: ReactNode }> = ({ children }) => (
	<ContainerMUI maxWidth={maxWidth}>{children}</ContainerMUI>
);
