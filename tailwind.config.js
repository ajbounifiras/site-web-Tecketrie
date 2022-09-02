/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {

      backgroundImage: theme => ({
   
        // 'hero': "url('assets/images/hero1.png')",
    
      }),
    },
  },
  plugins: [],
}
