export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // changed from selector to class for React usually
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"]
      },
      animation: {
        spin_slow: 'spin 6s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'bounce-delay': 'bounce 3s infinite 1.5s',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F',
        // Web3 & Sawad palette
        web3: {
          bg: '#0a0a0a',
          surface: '#121212',
          primary: '#00ffee', // Cyan
          secondary: '#bc13fe', // Neon Purple
          accent: '#1f1f1f',
        },
        sawad: {
          lime: '#ccf381',
          orange: '#ff5722',
          dark: '#0e0e0e',
          card: '#161616'
        }
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        'huge': '14rem',
      },
      boxShadow: {
        'black': '4px 4px 0 #000',
        'white': '4px 4px 0 #fff',
        'neon': '0 0 10px rgba(0,255,238, 0.5), 0 0 20px rgba(0,255,238, 0.3)',
      }
    },
  },
  plugins: [],
}

