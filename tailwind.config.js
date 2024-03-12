/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
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
      "bg-dm-from": 'rgb(var(--bg-color-dm-from) / <alpha-value>)',
      "bg-dm-to": 'rgb(var(--bg-color-dm-to) / <alpha-value>)',
      "bg-lm-from": 'rgb(var(--bg-color-lm-from) / <alpha-value>)',
      "bg-lm-to": 'rgb(var(--bg-color-lm-to) / <alpha-value>)',
    },
    extend: {
      backgroundImage: {
        'bkg-dm': 'radial-gradient(rgb(var(--secondary-color-dm)) 1px, transparent 1px), radial-gradient(rgb(var(--secondary-color-dm)) 1px, rgb(var(--bg-color-dm-to)) 1px)',
        'bkg-lm': 'radial-gradient(rgb(var(--bg-color-dm-to)) 1px, transparent 1px), radial-gradient(rgb(var(--bg-color-dm-to)) 1px, rgb(var(--bg-color-lm-to)) 1px)',
      }
    },
  },
  plugins: [],
}
