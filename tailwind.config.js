/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#DB4444',
        'primary-hover': '#C03333',
        'star-yellow': '#FFAD33',
        'badge-new': '#00FF66',
        'success': '#00A862',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.08)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.14)',
        dropdown: '0 4px 16px rgba(0,0,0,0.12)',
        modal: '0 8px 32px rgba(0,0,0,0.18)',
      },
    },
  },
  plugins: [],
}
