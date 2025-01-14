/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shinyFocus: {
          '0%': { textShadow: '0px 0px 5px rgba(192, 192, 192, 0)' },
          '50%': { textShadow: '0px 0px 20px rgba(192, 192, 192, 1)' },
          '100%': { textShadow: '0px 0px 5px rgba(192, 192, 192, 0)' },
        },
        borderShine: {
          '0%': { boxShadow: '0 0 0px rgba(192, 192, 192, 0)' },
          '50%': { boxShadow: '0 0 10px rgba(192, 192, 192, 1)' },
          '100%': { boxShadow: '0 0 0px rgba(192, 192, 192, 0)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'shiny-focus': 'shinyFocus 3s infinite ease-in-out',
        'border-shine': 'borderShine 3s infinite ease-in-out',
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 1s ease-out',
      },
      colors: {
        silver: '#C0C0C0',
      },
    },
  },
  plugins: [],
};
