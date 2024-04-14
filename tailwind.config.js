/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        UbuntuBold: ["Ubuntu-Bold"],
        UbuntuRegular: ["Ubuntu-Regular"],
        UbuntuMedium: ["Ubuntu-Medium"],
      },
    },
  },
  plugins: [],
};
