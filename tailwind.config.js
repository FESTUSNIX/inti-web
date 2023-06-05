/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		screens: {
			priority: '0px',
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			'2xl': '1400px',
			'3xl': '1600px'
		},
		colors: {
			transparent: 'transparent',
			background: '#06000F',
			dark: {
				900: '#18181b',
				800: '#26262B',
				700: '#60606C'
			},
			neutral: {
				50: '#FAFAFA',
				100: '#F5F5F5',
				200: '#E5E5E5',
				300: '#D4D4D4',
				400: '#A3A3A3',
				500: '#737373'
			},
			pink: '#9316CE',
			purple: '#3300FF',
			error: '#cf375b'
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-brand': 'linear-gradient(to right, #9316CE, #3300FF)'
			},
			fontFamily: {
				heading: ['var(--font-outfit)'],
				body: ['var(--font-source-sans-pro)']
			},
			keyframes: {
				wave: {
					'0%': {
						'background-position': '0% 0%',
						'background-size': '100% 100%'
					},
					'50%': {
						'background-position': '100% 0%',
						'background-size': '150% 100%'
					},
					'100%': {
						'background-position': '0% 0%',
						'background-size': '100% 100%'
					}
				}
			},
			animation: {
				'gradient-wave': 'wave 4s linear infinite'
			}
		}
	},
	plugins: []
}
