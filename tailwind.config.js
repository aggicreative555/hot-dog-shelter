/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    "./**/*.html",
    './src/**/*.{js,ts,jsx,tsx}',
    '!./node_modules/**/*',
  ],

  theme: {
    extend: {
      fontFamily: {
        niagara: ["Niagara Engraved", "serif"], // Display font and titles
        academy: ["Academy Engraved LET", "serif"], // Titles and headings
        manrope: ["Manrope", "sans-serif"], // Body and captions
        ibarra: ["Ibarra Real Nova", "serif"], // Display button
      },

      fontSize: {
        display: "11.391rem", // Display font and titles
        h1: "7.594rem", // Display font and titles
        h2: "5.063rem", // Titles and headings
        h3: "3.375rem", // Titles and headings
        h4: "2.25rem", // Titles and headings
        h5: "1.5rem", // Titles and headings
        body: "1rem", // Body and captions
        caption: "0.667rem", // Body and captions
      },
  
      colors: {
        primary: {
          mayo100: "#F9E4D9",
          fur100: "#1D1A19", 
        },
  
        brown: {
          100: "#E5D1C7", // Lightest
          200: "#FDDCC3",
          300: "#EDB18C",
          400: "#A5755D",
          500: "#89604C",
          600: "#735241",
          700: "#61483B",
          800: "#33241C",
          900: "#251A15", // Darkest
        },
  
        text: {
          light: 'mayo100', // Light theme
          medium: 'brown-700', // Input text / captions
          dark: 'fur100', // Dark theme
        },
  
        accent: {
          ketchup100: "#591610", // Red
          mustard100: "#A56E21", // Yellow
          correct100: "#033720", // Green
        },
      },
    },
  },

  darkMode: "selector",
  plugins: [require('@tailwindcss/forms')],
};
