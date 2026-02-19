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
      borderRadius: {
        DEFAULT: '0.65rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.25rem',
        '2xl': '1.6rem',
      },
      boxShadow: {
        card: '0 10px 28px rgba(2, 6, 23, 0.12)',
        'card-hover': '0 18px 42px rgba(2, 6, 23, 0.18)',
        dropdown: '0 12px 32px rgba(2, 6, 23, 0.16)',
        modal: '0 18px 52px rgba(2, 6, 23, 0.22)',
      },
    },
  },
  plugins: [],
}
