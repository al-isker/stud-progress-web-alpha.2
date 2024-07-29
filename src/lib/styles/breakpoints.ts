export type BreakpointsType = {
	xs: number;
	sm: number;
	md: number;
	lg: number;
	xl: number;
};

const BREAKPOINTS: BreakpointsType = {
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
	xs: BREAKPOINTS.xs + 'px',
	sm: BREAKPOINTS.sm + 'px',
	md: BREAKPOINTS.md + 'px',
	lg: BREAKPOINTS.lg + 'px',
	xl: BREAKPOINTS.xl + 'px'
};
