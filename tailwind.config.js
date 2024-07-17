/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    
    fontFamily: {
      sans: ['Georama', 'sans-serif'],
      mono:['Inconsolata', 'Courier', 'monospace']
    },
    extend: {
      colors: {
        'orange': '#ff7849',
        'gray-light': '#d3dce6',
        'rojo-eg':'#BC2929',
        'azul-eg': '#2964BC',
        'morado-eg':'#BC29AD',
        'nrj-eg':'#F17A0B',
        'verde-eg':'#1E887C',
        'neutro-eg': '#EDEDED',
        'neutro-green-eg': '#E4EDEB',
        'neutro-yellow-eg':'#EDEDE4',
        'neutro-red-eg':'#EDE4ED',
        'neutro-blue-eg':'#E4E5ED'
      },
      gridTemplateColumns: {
        // Simple 18 column grid
        '18': 'repeat(18, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}

