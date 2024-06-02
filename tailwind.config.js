import { ssrModuleExportsKey } from 'vite/runtime';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ssm: '0px',
      sm: '470px',
      md: '640px',
      lg: '1024px',
    },

    extend: {},
  },
  plugins: [],
}

