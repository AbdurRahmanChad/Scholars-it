/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "'Poppins', 'sans-serif'",
    },
    extend: {
      maxWidth: {
        containerBg: "1170px",
        cw: "1170px",
      },
      colors: {
        bgHeader: "#FFFFFF",
        bgButton: "#008240",
        bgBannar: "#F0F0F0",
        textHeading: "#00A652",
        textColor: "#FF4200",
        bgGrid: "#F8F8F8",
        bgFooter: "#013219",
        bgAbout: "#0f9f50",
        bgEvent: "#009147",
        bgCummit: "#039349",
        bgAboutGrid: "#DEEIE6",
        bgHome: "#F4F4F4",
      },

      fontSize: {
        tMd: "15px",
        tLg: "16px",
      },
    },
  },
  plugins: [],
};
