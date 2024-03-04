/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        open: ["Open Sans"],
      },
      fontSize:{
        44: "120px",
        48: "140px",
        52: "160px",
        56: "180px",
        60: "200px",
        64: "220px",
      },
      colors: {
        'primary': '#FBD784',
        "secondary":"#eee8aa",
        "third":"#FAFAFA",
        "overlay":"rgba(0, 0, 0, 0.600)"

      },
      spacing:{
        462:"462px",
        200:"200px",
        286:'286px',
        1320:"964px"
      },
      maxWidth:{
        container:"1320px"
       },
    },
  },
  plugins: [],
}

