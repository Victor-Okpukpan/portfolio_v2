/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'MyFont': ['Roboto Mono', 'monospace'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}