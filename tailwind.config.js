/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add JavaScript and TypeScript files in the src directory
    "./public/index.html", // Add the HTML file where classes might be used
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        md: "760px",
        // => @media (min-width: 768px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        "gpgp-blue": "#0A2471",
      },
      backgroundImage: {
        "hero-back": "url('./assets/images/gpgp-map.png')",
        "artist-back": "url('./assets/images/artist-frame.png')",
        "project-page-wave": "url('./assets/svg/projectwave.svg')",
        "project-page-mobile-wave": "url('./assets/svg/projectwavemobile.svg')",
        "project-challenge-image": "url('./assets/images/challenge.png')",
        "project-artist-web-back": "url('./assets/images/JD2.jpg')",
        "challenge-web-wave-header": "url('./assets/svg/challengewebwaveheader.svg')",
        "blue-plastic-bag": "url('./assets/images/BluePlasticBag.jpg')",
        "flat-lay-assortment": "url('./assets/images/flat-lay-assortment-different-colored-plastic-bags.jpg')",
        "news-page-wave": "url('./assets/images/newswave.png')",
        "contact-page-wave": "url('./assets/svg/contactwave.svg')",
        "contact-page-mobile-wave": "url('./assets/svg/contactwavemobile.svg')",
        "artist-contribute-wave": "url('./assets/svg/artistcontributewave.svg')",
        "artist-contribute-mobile-wave": "url('./assets/svg/sponsorwavemobile.svg')",
        "sponsor-contribute-wave": "url('./assets/svg/sponsorwave.svg')",
        "sponsor-contribute-mobile-wave": "url('./assets/svg/sponsorwavemobile.svg')",
      },
    },
  },
  plugins: [],
};
