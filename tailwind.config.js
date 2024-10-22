/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "nav-link-shadow": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
    keyframes: {
      "border-spin": {
        "100%": {
          transform: "rotate(-360deg)",
        },
      },
      slideInFromRight: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      slideInFromLeft: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      slideOutToLeft: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      slideOutToRight: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(100%)' },
      },
    },
    animation: {
      "border-spin": "border-spin 7s linear infinite",
      slideInFromRight: 'slideInFromRight 0.5s ease-in-out',
        slideInFromLeft: 'slideInFromLeft 0.5s ease-in-out',
        slideOutToLeft: 'slideOutToLeft 0.5s ease-in-out',
        slideOutToRight: 'slideOutToRight 0.5s ease-in-out',
    },
  },
  plugins: [],
};
