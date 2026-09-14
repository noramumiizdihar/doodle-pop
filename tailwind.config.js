/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pop: {
          yellow: '#FFDE59',
          orange: '#FF914D',
          pink: '#FF66C4',
          purple: '#8C52FF',
          blue: '#5CE1E6',
          sky: '#38B6FF',
          green: '#7ED957',
          mint: '#52D1DC',
          red: '#FF5757',
        }
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'bubbly': '0 8px 0 rgba(0,0,0,0.15)',
        'bubbly-active': '0 2px 0 rgba(0,0,0,0.2)',
        'bubbly-lg': '0 12px 0 rgba(0,0,0,0.15)',
        'glow': '0 0 20px rgba(255, 222, 89, 0.6)',
      },
      animation: {
        'bounce-slow': 'bounce 2.5s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 8px rgba(255,222,89,0.7))' },
          '50%': { filter: 'drop-shadow(0 0 20px rgba(255,102,196,0.9))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
