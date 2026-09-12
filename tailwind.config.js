/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prime: {
          dark: '#0D1230',
          navy: '#131A42',
          card: '#161E4A',
          gold: '#FDE197',
          'gold-hover': '#FCE7B2',
          light: '#FAFAFB',
          'warm-white': '#F8F9FC',
          muted: '#8E99B7',
          border: '#212A58',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ArmenianSans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(253, 225, 151, 0.15)',
        'gold-glow-lg': '0 0 40px rgba(253, 225, 151, 0.25)',
      }
    },
  },
  plugins: [],
}
