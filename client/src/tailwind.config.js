/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/flowbite-react/**/*.{html,js,jsx,ts,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("/node_modules/flowbite/plugin.js")],
};
