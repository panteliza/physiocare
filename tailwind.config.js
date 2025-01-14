/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        borderColorCycle: {
          '0%': { borderColor: 'pink' },
          '20%': { borderColor: 'red' },
          '40%': { borderColor: 'yellow' },
          '60%': { borderColor: 'green' },
          '80%': { borderColor: 'orange' },
          '100%': { borderColor: 'blue' },
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
        'border-color': 'borderColorCycle 2s infinite',
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 1s ease-out',
      },
      fontFamily: {
        professional: ['Playfair Display', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
