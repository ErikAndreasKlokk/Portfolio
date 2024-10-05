import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    screens: {
      breakpoint: {'max': '1100px'}
    },
    extend: {}
  },

  plugins: []
} as Config;
