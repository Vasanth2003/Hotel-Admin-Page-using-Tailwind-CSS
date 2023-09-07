import { _colorStringFilter } from 'gsap/gsap-core';

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {

      flexBasis:
      {
        20:'20%',
        80:'80%'
      },
      height:
      {
        '90':'90%'
      },
      colors:
      {
        sideMenuBg:'#181818',
        bodyBg:'#ffff',
        textColor:'#ffff',
        titleColor:'#2b2b2b',
        hoverColor:'#262626',
        colorOne:'#fbf0ef',
        colorTwo:'#fcf8ef',
        colorThree:'#f1fcf0',
        colorFour:'#fcf8ef',
        gradient:'linear-gradient(rgb(56,194,166),rgb(124,83,151))'
      }

      
    },
  },
  plugins: [],
  
}

