/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        31: "31px",
        65: "65px",
        120: "120px",
        160: "160px",
        189: "189px",
        204: "204px",
      },
      width: {
        60: "60px",
        150: "150px",
        152: "152px",
        180: "180px",
        213: "213px",
        386: "386px",
        435: "435px",
        443: "443px",
        540: "540px",
      },
      margin: {
        small: "6px",
        30: "30px",
        50: "50px",
        52: "52px",
        70: "70px",
        100: "100px",
        124: "124px",
        130: "130px",
      },
      lineHeight: {
        32: "32px",
      },
      fontSize: {
        38: "38px",
        55: "55px",
      },
      gap: {
        50: "50px",
        90: "90px",
      },
    },
    fontFamily: {
      sans: ['"Poppins", sans-serif'],
    },
    colors: {
      black: "#070F18",
      "light-gray": "#F5F6FB",
      "dark-gray": "#575455",
      blue: "#1F7CFF",
      white: "#ffffff",
      red: "#F75C4E",
    },
    borderRadius: {
      50: "50px",
    },
  },
  plugins: [],
};
