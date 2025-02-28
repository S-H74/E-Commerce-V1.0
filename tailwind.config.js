/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": " 1px 1px 10px #4fa74f",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
