const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".masonry": {
          display: "-webkit-box",
          display: "-ms-flexbox",
          display: "flex",
          margin: "0 -16px",
          width: "auto",
        },
        ".masonry-column": {
          paddingLeft: "16px",
          paddingRight: "16px",
          width: "100%",
        },
        ".masonry-column > * + *": {
          marginTop: "16px",
        },
      });
    }),
  ],
};
