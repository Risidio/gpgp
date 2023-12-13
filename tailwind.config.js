/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add JavaScript and TypeScript files in the src directory
    "./public/index.html", // Add the HTML file where classes might be used
  ],
  theme: {
    fontFamily: {
      BeVietnam: ['"Be Vietnam"', "sans-serif"],
    },
    extend: {
      screens: {
        xxsm: "240px",
        // => @media (min-width: 340px) { ... }
        xsm: "340px",
        // => @media (min-width: 340px) { ... }
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        md: "760px",
        // => @media (min-width: 768px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        xxl: "1440px",
        // => @media (min-width: 1440px) { ... }
        xxxl: "1700px",
        // => @media (min-width: 2040px) { ... }
        xxxxl: "2560px",
        // => @media (min-width: 2560px) { ... }
      },
      colors: {
        "gpgp-blue": "#0A2471",
        "gpgp-black": "#050B1D",
      },
      backgroundImage: {
        "hero-back": "url('./assets/images/gpgp-map.png')",
        "artist-back": "url('./assets/images/artist-frame.png')",
        "project-page-wave": "url('./assets/svg/projectwave.svg')",
        "project-page-mobile-wave": "url('./assets/svg/projectwavemobile.svg')",
        "project-challenge-image": "url('./assets/images/challenge.png')",
        "project-artist-web-back": "url('./assets/images/JD2.jpg')",
        "challenge-web-wave-header":
          "url('./assets/svg/challengewebwaveheader.svg')",
        "challenge-mobile-bg-wave":
          "url('./assets/svg/challengemobilesvg.svg')",
          "challenge-plastic-rev-wave":
          "url('./assets/svg/plasticrevolution.svg')",
          "challenge-plastic-rev-mobile-wave":
          "url('./assets/svg/plasticrevolutionmobile.svg')",
        "blue-plastic-bag": "url('./assets/images/BluePlasticBag.jpg')",
        "flat-lay-assortment":
          "url('./assets/images/flat-lay-assortment-different-colored-plastic-bags.jpg')",
        "news-page-wave": "url('./assets/images/newswave.png')",
        "contact-page-wave": "url('./assets/svg/contactwave.svg')",
        "contact-page-mobile-wave": "url('./assets/svg/contactwavemobile.svg')",
        "artist-contribute-wave":
          "url('./assets/svg/artistcontributewave.svg')",
        "artist-contribute-mobile-wave":
          "url('./assets/svg/sponsorwavemobile.svg')",
        "sponsor-contribute-wave": "url('./assets/svg/sponsorwave.svg')",
        "sponsor-contribute-mobile-wave":
          "url('./assets/svg/sponsorwavemobile.svg')",
        "flat-lay-composition":
          "url('./assets/images/flat-lay-composition-different-colored-plastic-bags.png')",
        "flat-lay-composition-mobile":
          "url('./assets/images/flat-lay-composition-different-colored-plastic-bags-mobile.jpg')",
        "trashed-plastics": "url('./assets/images/trashedPlasticObjects.png')",
        "trashed-plastics-mobile":
          "url('./assets/images/trashedPlasticObjectsMobile.jpg')",
        "news-background-wave": "url('./assets/svg/newswave.svg')",
      },
      fontFamily: {
        BeVietnam: ['"Be Vietnam"', "sans-serif"],
      },
      fontWeight: {
        700: 700,
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const boxShadows = {
        ".gpgp-home-map-shadow": {
          "box-shadow": "0px 0px 26.7px 0px rgba(0, 0, 0, 0.16) inset",
        },
      };

      addUtilities(boxShadows, ["responsive", "hover"]);
    }
  ],
};
