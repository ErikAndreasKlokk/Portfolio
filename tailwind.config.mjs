/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'2xl': {'max': '1535px'},
			// => @media (max-width: 1535px) { ... }
	  
			'xl': {'max': '1279px'},
			// => @media (max-width: 1279px) { ... }
	  
			'lg': {'max': '1023px'},
			// => @media (max-width: 1023px) { ... }
	  
			'md': {'max': '767px'},
			// => @media (max-width: 767px) { ... }
	  
			'sm': {'max': '639px'},
			// => @media (max-width: 639px) { ... }
		},
		extend: {
						
			// that is animation class
			animation: {
				fade: 'fadeOut 1000ms ease-out infinite',
			},

			// that is actual animation
			keyframes: theme => ({
				fadeOut: {
					'0%': { color: theme('text.gray.200') },
					'15%': { color: theme('colors.transparent') },
					'85%': { color: theme('colors.transparent') },
					'100%': { color: theme('text.gray.200') },
				},
			}),

			colors: {
				'portfolio-50':'#e1f7e1',
				'portfolio-100':'#baedba',
				'portfolio-200':'#a0e7a0',
				'portfolio-300':'#79dd79',
				'portfolio-400':'#5fd75f',
				'portfolio-500':'#37cd37',
				'portfolio-600':'#2db62d',
				'portfolio-700':'#238f23',
				'portfolio-800':'#1d751d',
				'portfolio-900':'#134e13',
				'portfolio-950':'#0b2d0b',
			}
		},
	},
	plugins: [require("daisyui"), require('tailwind-scrollbar-hide')],

	
}


