/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{customFont:['Poetsen One'],
        kanitFont:['Kanit']
      },
      screens: {
        'xxs':'320px',
        'xs':'375px',
        'sm':'425px',
        'custom': '480px',
        'md':'768px',
        'lg': '1024px',
        'xl' : '1280px',
        '2xl' : '1536px'
      },
      boxShadow:{
        customShadow:'10px 10px 14px 3px rgba(126, 126, 126, 0.5)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

