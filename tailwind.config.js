/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
         },
    fontFamily: {
      primary: 'DM Serif Display',
      secondary: 'Jost',
    },
    backgroundImage: {
      logo: 'url(/assets/LOGO.png)',
      hero: 'url(/assets/nature.jpg)',
      decoration: 'url(/assets/leaf1.png)',
    },
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 100s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
    },
  },
  plugins: [],
}

}
