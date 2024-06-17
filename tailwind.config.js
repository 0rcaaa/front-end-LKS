/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/index.html","./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
    theme: {
      extend: {
        fontFamily: {
          pop:[
            "Poppins"
          ]
        },
      },
    },
    plugins: [ 
      require('./src/vendor/flowbite/plugin'),
      require('daisyui'),
      require("@designbycode/tailwindcss-text-stroke")],
    daisyui:{
      themes:["dark"]
    }
  }