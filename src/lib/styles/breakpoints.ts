const BREAKPOINTS = {
	xs: 320,
	sm: 480,
	md: 768,
	lg: 1024,
	xl: 1250
};

export const BREAKPOINTS_MUI = {
	values: BREAKPOINTS
};

export const BREAKPOINTS_TAILWIND = {
	sm: BREAKPOINTS.sm + 'px',
	md: BREAKPOINTS.md + 'px',
	lg: BREAKPOINTS.lg + 'px'
};
