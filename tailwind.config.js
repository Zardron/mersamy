const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Great Vibes, Georgia, serif, system-ui",
      secondary: "Droid Sans, arial, sans-serif",
      tertiary: "Caveat Brush, cursive",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1140px",
    },
    extend: {
      colors: {
        primary: "#750321",
        accent: {
          DEFAULT: "#2dadc9",
          hover: "#967142",
        },
      },
      backgroundImage: {
        room: "url('./assets/img/room.jpg')",
        gallery:
          "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1018,h=584,fit=crop,trim=212.2850122850123;116.2684124386252;149.38574938574936;204.25531914893617/YyvXe0ZbvlcB1644/img_0645-3-mP4P68JppXfX11yQ.jpg')",
      },
    },
  },
  plugins: [],
});
