import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			dropShadow: {
				'card-white-01': '0px 12px 24px 0px rgba(0, 0, 0, 0.1)',
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: '#FFDE31',
				secondary: '#0366FF',
				border: '#EEEEEE',
				'card-001': '#F0EFEF26',
				'gray-002': '#504E4E',
				'blue-linear-01': 'linear-gradient(90deg, #635AD9 0%, #219BE4 100%)',
				'c-blue-200': '#193EE2',
				'card-white': '0px 12px 24px 0px rgba(0, 0, 0, 0.1)',
			},
		},
		fontFamily: {
			jakarta_sans: ['Plus Jakarta Sans', 'system-ui'],
		},
	},
	plugins: [],
} satisfies Config
