import type { Config } from 'tailwindcss';

// noinspection ES6PreferShortImport
import { BREAKPOINTS_TAILWIND } from './src/lib/styles/breakpoints';
// noinspection ES6PreferShortImport
import { COLORS_TAILWIND } from './src/lib/styles/colors';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		screens: BREAKPOINTS_TAILWIND,

		extend: {
			colors: COLORS_TAILWIND,

			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		}
	},
	plugins: []
};

export default config;
