import { Button as ButtonMUI, ButtonProps, styled } from '@mui/material';

const StyledButton = styled(ButtonMUI)({
	boxShadow: 'none !important'
});

export const Button = (props: ButtonProps) => {
	return <StyledButton {...props} />;
};
