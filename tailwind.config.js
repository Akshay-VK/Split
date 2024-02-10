/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'rob':['RobotoSerif','sans-serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

