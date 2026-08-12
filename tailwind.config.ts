/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          600: '#667eea',
          700: '#764ba2',
        },
        pink: {
          600: '#f093fb',
          700: '#f5576c',
        },
      },
    },
  },
  plugins: [],
};

export default config;
