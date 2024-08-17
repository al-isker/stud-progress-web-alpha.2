import { type Config } from 'tailwindcss';

// noinspection ES6PreferShortImport
import { BREAKPOINTS, FONT_FAMILY } from './src/lib/styles/style';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		screens: Object.entries(BREAKPOINTS).reduce((acc, [key, number]) => {
			return {
				...acc,
				[key]: number + 'px'
			};
		}, {}),

		fontFamily: FONT_FAMILY,

		boxShadow: {
			0: 'var(--shadows-0)',
			1: 'var(--shadows-1)',
			2: 'var(--shadows-2)',
			3: 'var(--shadows-3)',
			4: 'var(--shadows-4)',
			5: 'var(--shadows-5)',
			6: 'var(--shadows-6)',
			7: 'var(--shadows-7)',
			8: 'var(--shadows-8)',
			9: 'var(--shadows-9)',
			10: 'var(--shadows-10)',
			11: 'var(--shadows-11)',
			12: 'var(--shadows-12)',
			13: 'var(--shadows-13)',
			14: 'var(--shadows-14)',
			15: 'var(--shadows-15)',
			16: 'var(--shadows-16)',
			17: 'var(--shadows-17)',
			18: 'var(--shadows-18)',
			19: 'var(--shadows-19)',
			20: 'var(--shadows-20)',
			21: 'var(--shadows-21)',
			22: 'var(--shadows-22)',
			23: 'var(--shadows-23)',
			24: 'var(--shadows-24)'
		},

		extend: {
			colors: {
				primary: 'rgb(var(--palette-primary-mainChannel) / <alpha-value>)',
				'primary-light':
					'rgb(var(--palette-primary-lightChannel) / <alpha-value>)',
				'primary-dark':
					'rgb(var(--palette-primary-darkChannel) / <alpha-value>)',

				secondary: 'rgb(var(--palette-secondary-mainChannel) / <alpha-value>)',
				'secondary-light':
					'rgb(var(--palette-secondary-lightChannel) / <alpha-value>)',
				'secondary-dark':
					'rgb(var(--palette-secondary-darkChannel) / <alpha-value>)',

				'as-bg-default':
					'rgb(var(--palette-background-defaultChannel) / <alpha-value>)',

				'as-text-primary':
					'rgb(var(--palette-text-primaryChannel) / <alpha-value>)',
				'as-text-secondary':
					'rgb(var(--palette-text-secondaryChannel) / <alpha-value>)',
				'as-contrast-text-primary':
					'rgb(var(--palette-primary-contrastTextChannel) / <alpha-value>)',
				'as-contrast-text-secondary':
					'rgb(var(--palette-secondary-contrastTextChannel) / <alpha-value>)',

				'action-active': 'var(--palette-action-active)'
			},

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
