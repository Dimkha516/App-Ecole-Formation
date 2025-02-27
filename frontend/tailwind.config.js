/** @type {import('tailwindcss').Config} */
 
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
   
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      // "dark",
      // "synthwave",
      // "corporate",
      // "bumblebee", 
      // "cupcake",
      // "emerald",
    ], // Choisissez vos thèmes préférés
  //  darkTheme: "dark", // Thème par défaut en mode sombre
  },
};
