/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        highlight: '0px 0px 15px rgba(255, 255, 255, 0.8)', // Glow effect for hover
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out', // Animation for smooth fade-in
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      colors: {
        teal: {
          900: '#064E3B', // Deep teal for background
          500: '#14B8A6', // Lighter teal for buttons
        },
        gray: {
          500: '#6B7280', // Medium gray for secondary buttons
          700: '#374151', // Darker gray for text
        },
      },
    },
  },
  plugins: [],
};
