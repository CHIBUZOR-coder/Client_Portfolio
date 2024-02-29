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
        force:"100px",
      },
      width:{
        fat:"450px",
        stat:"50px"
      },

      height:{
        statt:"50px",
      },

      colors: {
        greyishWhite: "#f5f5f5", // You can adjust the hex value as needed
      },
    },
  },
  plugins: [],
};

// "./**/*.{html,js,jsx,ts,tsx,vue}
