const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--brand-primary-50)',
          100: 'var(--brand-primary-100)',
          200: 'var(--brand-primary-200)',
          300: 'var(--brand-primary-300)',
          400: 'var(--brand-primary-400)',
          500: 'var(--brand-primary-500)',
          600: 'var(--brand-primary-600)',
          700: 'var(--brand-primary-700)',
          800: 'var(--brand-primary-800)',
          900: 'var(--brand-primary-900)',
          DEFAULT: 'var(--brand-primary-600)',
        },
        secondary: {
          50: 'var(--brand-accent-50)',
          100: 'var(--brand-accent-100)',
          200: 'var(--brand-accent-200)',
          300: 'var(--brand-accent-300)',
          400: 'var(--brand-accent-400)',
          500: 'var(--brand-accent-500)',
          600: 'var(--brand-accent-600)',
          700: 'var(--brand-accent-700)',
          800: 'var(--brand-accent-800)',
          900: 'var(--brand-accent-900)',
          DEFAULT: 'var(--brand-accent-500)',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)', ...defaultTheme.fontFamily.sans],
        heading: ['var(--font-heading)', ...defaultTheme.fontFamily.serif],
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-in-out',
        fadeInUp: 'fadeInUp 0.3s ease-out forwards',
        slideDown: 'slideDown 0.3s ease-out forwards',
        slideUp: 'slideUp 0.3s ease-out forwards',
        blink: 'blink 0.6s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
        blink: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
