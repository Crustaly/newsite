/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        garden: '#F4FFE9',
        strawberry: '#D13C3C',
        ink: '#32030F',
        blush: '#FFD6DE',
        leaf: '#E8F8D8',
        muted: '#6B4A52',
      },
      fontFamily: {
        heading: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
        accent: ['Caveat', 'cursive'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #FF69B4, 0 0 10px #FF69B4, 0 0 15px #FF69B4' },
          '100%': { boxShadow: '0 0 10px #FF69B4, 0 0 20px #FF69B4, 0 0 30px #FF69B4' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
