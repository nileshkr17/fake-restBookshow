/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#000000',
          text: '#ef4444',
          primary: '#8b5cf6',
          secondary: '#d97706',
        },
        light: {
          bg: '#fff',
          text: '#ef4444',
          primary: '#6366f1',
          secondary: '#f59e0b',
        },
      },
    },
  },
  plugins: [],
}