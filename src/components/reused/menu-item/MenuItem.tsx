import { type FC, type ReactNode } from 'react';

import { NavigateNext } from '@mui/icons-material';
import { Icon, MenuItem as MenuItemMUI, MenuItemProps } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Container } from '@/components/reused/container/Container';

import { Loader } from '../loader/Loader';

type Props = Omit<MenuItemProps, 'sx' | 'disableGutters' | 'disabled'> & {
	icon: ReactNode;
	text: string;
	loading?: boolean;
};

export const MenuItem: FC<Props> = ({
	children,
	icon,
	text,
	loading,
	...MenuItemProps
}) => {
	return (
		<MenuItemMUI
			sx={{ height: '3.5rem', paddingBlock: 0 }}
			disableGutters
			disabled={loading}
			{...MenuItemProps}
		>
			<Container className='flex h-full items-center gap-3'>
				<MenuItemIcon
					className='rounded-sm bg-primary-dark/15 p-4 text-as-text-primary/80'
					fontSize='small'
				>
					{icon}
				</MenuItemIcon>
				<div className='flex-grow overflow-hidden text-ellipsis text-nowrap'>
					{text}
				</div>
				<div className='h-full max-h-fit'>
					{loading ? (
						<Loader className='h-1/2 text-primary/90' />
					) : (
						(children ?? <NavigateNext className='text-as-text-primary/80' />)
					)}
				</div>
			</Container>
		</MenuItemMUI>
	);
};

const MenuItemIcon = styled(Icon)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	'& svg': {
		display: 'block',
		fontSize: 'inherit'
	}
});
