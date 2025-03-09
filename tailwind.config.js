/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffcc00',
        button: '#4caf50',
        tertiary: '#2d2a26',
        quaternary: "#726b60",
        quinary: "#227aad",
        wine: "#930022",
        shadow: "#e6e6e6",
        gold: "#ffd700",
        gold2: "#EFBF04",
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'], 
        roboto: ['Roboto', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        lora: ['lora', 'sans-serif'],
        valera: ['Varela', 'sans-serif'],
      },
    },
  },
  plugins: [],
}