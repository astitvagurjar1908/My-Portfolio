/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#080B12',
          900: '#0B0F18',
          800: '#111726',
          700: '#1A2236',
          600: '#242E45',
        },
        accent: {
          DEFAULT: '#2563EB',
          light: '#5B8DEF',
          dark: '#1D4ED8',
        },
        signal: {
          cyan: '#22D3EE',
          green: '#34D399',
          amber: '#FBBF24',
        },
        ink: {
          DEFAULT: '#F5F7FA',
          muted: '#9AA6B8',
          faint: '#5E6B82',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grad-accent': 'linear-gradient(135deg, #2563EB 0%, #22D3EE 100%)',
        'grad-radial': 'radial-gradient(circle at 50% 0%, rgba(37,99,235,0.18), transparent 60%)',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.35)',
        glow: '0 0 40px rgba(37,99,235,0.25)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.2 },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        blink: 'blink 1.4s ease-in-out infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};
