/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      ChronicleDisplay: ['Playfair Display', ...defaultTheme.fontFamily.serif],
      BrandonGrotesque: ['Josefin Sans', ...defaultTheme.fontFamily.sans] // 700 (bold) is max for this font
    }
  },
  plugins: []
}
