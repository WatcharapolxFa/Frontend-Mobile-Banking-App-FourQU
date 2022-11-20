/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-kem': '#76978E',
        'green-sod' : '#387766',
        'green-oon' : '#8DD0BD',
        'pin-button' : "#FBFFF5",
        'gray-pin': "#BEBEBE",
        'green-green' : '#61A592',
        'green-bg-logo' : '#61A592',
        'green-cf' : '#8DD0BD',
        'tao': '#E1D8D8',
        'red-onn': '#FD6565',
        'base' : '#F1EEE6',
        'yellowonn' : '#F6D8A9',
        'red-ja' : '#E80000',
        'green-main': '#387766',
        'secondary-green': '#76978E',
        'light-green': '#C7D5B1',
        'green-font': '#5E8379',
        'cherry': '#D3AD9F',
        'base': '#F1EEE6',
        'egg': '#F6D8A9',
        'red-noti': '#FD6565',
        'green-main':'#76968E',
        'green-regis':'#387766',
        'white':'#FFFFFF',
        'red-button':'#FD6565',
        'green-button':'#8DD0BD',
        'dark-base':'#E1D8D8',
        'black':'#000000',
        'green-total':'#009006',
        'green-signup':'#789C93'
      },
      
      boxShadow: {
        'logo' : '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      margin: {
        'ar' : '4.25rem'
      },
      spacing: {
        '96%': '96%',
        '1%': '1%',
        '36%': '36%'
      },
    },
  },
  plugins: [],
};
