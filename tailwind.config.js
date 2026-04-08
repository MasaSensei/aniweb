/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        onkyo: {
          bg: "#0A0E17", // Biru gelap (Deep Night)
          nav: "#141A29", // Navy gelap
          primary: "#FF007F", // Pink Magenta (Ai Hoshino)
          secondary: "#4B0082", // Indigo
          accent: "#FFD700", // Star Yellow
          text: "#F4F4F4",
        },
      },
    },
  },
  plugins: [],
};
