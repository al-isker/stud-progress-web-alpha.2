import { type FC, type ReactNode } from 'react';

import { Container as ContainerMUI } from '@mui/material';

export const Container: FC<{ children: ReactNode }> = ({ children }) => (
	<ContainerMUI maxWidth={false}>{children}</ContainerMUI>
);
