/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'pastel-blue-sky': 'hsl(210, 60%, 98%)', /* --background */
        'pastel-mint': 'hsl(150, 56%, 75%)', /* --primary */
        'pastel-mint-dark': 'hsl(150, 56%, 65%)',
        'pastel-lila-light': 'hsl(255, 60%, 90%)', /* --secondary */
        'pastel-lila-light-dark': 'hsl(255, 60%, 80%)',
        'pastel-beige': 'hsl(39, 50%, 92%)', /* --muted */
        'pastel-pink': 'hsl(0, 80%, 85%)', /* --accent */
        'pastel-pink-dark': 'hsl(0, 80%, 75%)',
        'pastel-gray-light': 'hsl(210, 30%, 85%)', /* --border / --input */
        'pastel-gray': 'hsl(220, 10%, 45%)', /* --muted-foreground */
        'pastel-gray-dark': 'hsl(220, 15%, 25%)', /* --foreground */
        'pastel-blue-light': 'hsl(200, 70%, 90%)',
        'pastel-blue-light-dark': 'hsl(200, 70%, 80%)',
        'pastel-whatsapp-green': 'hsl(145, 63%, 49%)',
        'pastel-whatsapp-green-dark': 'hsl(145, 63%, 39%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};