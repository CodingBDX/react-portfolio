module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bhutuka: ['"BhuTuka Expanded One"', "cursive"],
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "16/9": " 16 / 9",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
