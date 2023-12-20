/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        xsm: '0px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1192px',
        xxl: '1800px',
      },
    },
  },
  plugins: [],
}

