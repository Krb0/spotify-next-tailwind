const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],

  mode: "jit",
  theme: {
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: "#18D860",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
