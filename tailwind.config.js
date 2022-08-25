/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "very-dark-blue": "#090b1a",
        "dark-desaturated-blue": "#1b1938",
        "soft-violet": "#aa5cdb",
        "white-7": "hsla(0, 0%, 100%, 0.75)",
        "white-6": "hsla(0, 0%, 100%, 0.6)",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        "Lexed-Deca": ["Lexend Deca", "sans-serif"],
      },
      fontSize: {
        "semi-base": "0.9375rem", // 15px
        "semi-2xl": "1.375rem",
        "semi-3xl": "1.7rem",
      },
      fontWeight: {
        regular: "400",
      },
      lineHeight: {
        6.5: "1.625rem",
      },
      letterSpacing: {
        "extra-wide": ".125em",
      },
    },
  },
  plugins: [],
};
