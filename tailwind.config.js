/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'nav-link-shadow': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
    keyframes: {
      'border-spin': {
        '100%': {
          transform: 'rotate(-360deg)',
        },
      },
    },
    animation: {
      'border-spin': 'border-spin 7s linear infinite',
    },
  },
  plugins: [],
}

