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
			<Container className='h-full flex items-center gap-3'>
				<MenuItemIcon
					className='bg-primary-dark/15 rounded-sm p-4 text-as-text-primary/80'
					fontSize='small'
				>
					{icon}
				</MenuItemIcon>
				<div className='flex-grow text-ellipsis text-nowrap overflow-hidden'>
					{text}
				</div>
				<div className='max-h-fit h-full'>
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
