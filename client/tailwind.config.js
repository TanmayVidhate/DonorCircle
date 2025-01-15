/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E63946', // Red for Action/Highlights
        secondary: '#F8F9FA', // Light Gray for Background
        accent: '#212529', // Dark Gray for Typography/Details
        neutral: '#FFFFFF', // White for Borders/Background Elements
      },
    },
  },
  plugins: [],
}

