export default {
  content: [
    './index.html',
    "./**/*.html",
    './src/**/*.{js,ts,jsx,tsx}',
    '!./node_modules/**/*',
  ],

  theme: {
    extend: {
    },
  },

  darkMode: "selector",
  plugins: [],
};