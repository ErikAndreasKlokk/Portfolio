/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
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
	plugins: [require("daisyui"), ('tailwind-scrollbar-hide')],

	
}


