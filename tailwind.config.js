/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/**/*.liquid",
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./templates/**/*.liquid",
  ],
  theme: {
    extend: {
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.10)',
        'md': '4px 4px 6px rgba(0, 0, 0, 0.10)',
        'lg': '6px 6px 8px rgba(0, 0, 0, 0.10)',
        'none': 'none'
      },
      width: {
        '125': '125px',
        '135': '135px',
      }
    },
  },
  plugins: [],
}