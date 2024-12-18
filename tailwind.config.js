/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "nav-link-shadow": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
        Ubuntu:  "Ubuntu, sans-serif" ,
        Kora_One : "Krona One, sans-serif",
      },
    },
  },
  plugins: [],
};
