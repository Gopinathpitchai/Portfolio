/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        dark: {
          950: '#07090e',
          900: '#0b0f19',
          850: '#0e1421',
          800: '#141e32',
        },
        cyan: {
          DEFAULT: '#00f2fe',
          glow: 'rgba(0, 242, 254, 0.28)',
        },
        purple: {
          DEFAULT: '#a855f7',
          glow: 'rgba(168, 85, 247, 0.28)',
        },
        emerald: {
          DEFAULT: '#00f5a0',
          glow: 'rgba(0, 245, 160, 0.28)',
        },
        amber: '#f59e0b',
        rose: '#f43f5e',
        blue: '#38bdf8',
      },
      fontFamily: {
        heading: ['Outfit', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px rgba(0, 242, 254, 0.25)',
        'glow-purple': '0 0 25px rgba(168, 85, 247, 0.25)',
        'glow-emerald': '0 0 25px rgba(0, 245, 160, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'float-slow': 'floatOrb 14s ease-in-out infinite alternate',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'rotate-ring': 'rotateRing 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatOrb: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(30px, -40px) scale(1.08)' },
          '100%': { transform: 'translate(-30px, 30px) scale(0.95)' },
        },
        rotateRing: {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
