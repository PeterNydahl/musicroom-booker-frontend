/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.js", //man måste ange om man ska exportera tailwind klasser från en viss mapp
  ],
  theme: {
    extend: {
      //här kan man expandera tailwind så att tex "font-myHeading" dyker upp i intellisence!
      fontFamily: {
        myHeading: ["Aboreto", "cursive"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

