/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      height: {
        big_h: "20rem",
        ppa: "400px",
      },
      margin: {
        ppaa: "180px",
      },

      colors: {
        greyishWhite: "#f5f5f5", // You can adjust the hex value as needed
      },
    },
  },
  plugins: [],
};

// "./**/*.{html,js,jsx,ts,tsx,vue}
