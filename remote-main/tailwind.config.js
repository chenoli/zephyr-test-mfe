/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    '../design-system/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffcde560',
        secondary: '#000',
      },
    },
  },
  plugins: [],
}
