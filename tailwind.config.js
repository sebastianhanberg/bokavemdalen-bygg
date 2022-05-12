module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js", './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '540px',
      lg: '768px',
      xl: '1024px',
      xxl: '1440',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#50866C',
      'yellow': '#F3AF1B',
      'gray-dark': '#313339',
      'grey': '#8492a6',
      'gray-light': '#d3dce6',
      'dark-green': '#1E3737',  
      'white': '#ffffff',
    },
    fontFamily: {
      sans: ['Prata', 'sans-serif'],
      serif: ['Prata', 'serif'],
    },
    extend: {},
    
  },
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin'),
  ],
}
