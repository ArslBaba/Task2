module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {

      'xs': '300px',
      'smm': '540px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md' : '1020px',

      // => @media (min-width: 1024px) { ... }


      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl' : '1536px',
    },
    extend: {
      colors:
      {
        primary : "red",
        cyan : "#CFFAFE",
        c1 : "#06B6D4",
        c2 : "#0E7490",
        c3: "#0E7490",

        small: "#EFF3F7",
        url:"#FFFFFF",
        cyan_700 :"#0E7490",

        fonts : "#1F2937" ,
        font_gray : "#52525B",
        
        button_back:"#0891B2", 
        heading_color:"#1F2937",
        gray_800: " #27272A",
        new : '#1F2937',
        footer :'#F4F4F5',
        gray_600 :'#52525B',

        back : "#E5E5E5",
        head : " #A5F3FCCC",
        
          }
    },
  },
  plugins: [],
}