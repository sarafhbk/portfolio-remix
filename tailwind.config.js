module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        10000: 10000,
      },
      height: {
        0.18: "0.18rem",
        pageHeightMinusHeader: "calc(100% - 8rem)",
      },
      minHeight: {
        height96: "24rem",
      },
      colors: {
        "app-black": "#14161a",
      },
    },
  },
  plugins: [],
};
