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
        display: ["Niagara Engraved", "serif"], // Display font and titles
        heading: ["Academy Engraved LET", "serif"], // Titles and headings
        body: ["Manrope", "sans-serif"], // Body and captions
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
          400: "#C47650",
          500: "#73321A",
          600: "#601D0B",
          700: "#4D0F04",
          800: "#390702",
          900: "#260201", // Darkest
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
