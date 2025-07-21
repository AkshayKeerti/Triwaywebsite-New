/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors with accessibility-compliant shades
        primary: {
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fbd9c0',
          300: '#f8be97',
          400: '#f49a6a',
          500: '#f26521', // Main brand orange
          600: '#e34d1c',
          700: '#bc3a18',
          800: '#96301a',
          900: '#7a2a18',
          950: '#42120a',
        },
        secondary: {
          50: '#f4f5f8',
          100: '#e8eaf2',
          200: '#d1d6e6',
          300: '#a9b3d1',
          400: '#7a8bb8',
          500: '#2f3a75', // Main brand blue
          600: '#2a2f5f',
          700: '#23264e',
          800: '#1e2141',
          900: '#1a1d37',
          950: '#0f111a',
        },
        accent: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#00a650', // Main brand green
          600: '#009547',
          700: '#007a3a',
          800: '#006130',
          900: '#005029',
          950: '#002d15',
        },
        // Updated neon colors using brand colors
        neon: {
          orange: '#f26521', // Primary brand color
          blue: '#2f3a75',   // Secondary brand color
          green: '#00a650',  // Accent brand color
          purple: '#6366f1', // Complementary purple
          pink: '#ec4899',   // Complementary pink
          red: '#ef4444',    // Error color
        },
        // Updated dark theme colors
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'scale': 'scale 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(242, 101, 33, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(242, 101, 33, 0.8)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-futuristic': 'linear-gradient(135deg, #f26521 0%, #2f3a75 25%, #00a650 50%, #6366f1 75%, #ec4899 100%)',
        'gradient-neon': 'linear-gradient(45deg, #f26521, #2f3a75, #00a650, #6366f1)',
        'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        'gradient-brand': 'linear-gradient(135deg, #f26521 0%, #2f3a75 50%, #00a650 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(242, 101, 33, 0.5)',
        'neon-blue': '0 0 20px rgba(47, 58, 117, 0.5)',
        'neon-green': '0 0 20px rgba(0, 166, 80, 0.5)',
        'neon-purple': '0 0 20px rgba(99, 102, 241, 0.5)',
        'neon-pink': '0 0 20px rgba(236, 72, 153, 0.5)',
        'glow': '0 0 30px rgba(242, 101, 33, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(242, 101, 33, 0.2)',
      },
    },
  },
  plugins: [],
} 