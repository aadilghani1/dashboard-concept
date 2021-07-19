module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        leftBackground: "#F9F9F9",
        MainContentBackground: "#FFFFFF",
        RightBackground: "#F8FAFE",
        boxPurple: "#51459F",
        boxGray: "#ECEEF9",
        notificationRing: "#F88A6D",
        bitcoinYellow: "#FDECD4",
        ethereumPurple: "#FCE4F8",
        litecoinBlue: "#B4E0E8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
