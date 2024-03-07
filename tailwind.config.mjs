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
		},
	},
	plugins: [require("daisyui"), require('tailwind-scrollbar-hide')],

	
}


