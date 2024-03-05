/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'raleway': ['Raleway', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
    },
    colors: {
      "primary-dm": 'rgb(var(--primary-color-dm) / <alpha-value>)',
      "secondary-dm": 'rgb(var(--secondary-color-dm) / <alpha-value>)',
      "primary-lm": 'rgb(var(--primary-color-lm) / 80%)',
      "secondary-lm": 'rgb(var(--secondary-color-lm) / <alpha-value>)',
    }
  },
  plugins: [],
}
