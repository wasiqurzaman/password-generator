/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Jetbrains Mono", "serif"]
      },
      colors: {
        // "darker-gray": "var(--darker-gray)",
        // "dark-gray": "var(--dark-gray)",
        // "lighter-gray": "var(--lighter-gray",
        // "black-custom": "var(--black)",

        // primary: "var(--green)",
        // "accent-red": "var(--red)",
        // "accent-orange": "(--orange)",
        // "accent-yellow": "var(--yellow)",

        "darker-gray": "#24232c",
        "dark-gray": "#817d92",
        "lighter-gray": "#e6e5ea",
        "black-custom": "#18171f",

        primary: "#a4ffaf",
        "accent-red": "#f64a4a)",
        "accent-orange": "#fb7c58",
        "accent-yellow": "#f8cd65",
      }
    },
  },
  plugins: [],
}

