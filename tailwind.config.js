module.exports = {
  purge: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.pug',
    './src/**/*.md',
  ],
  theme: {
    fontFamily: {
      sans: ['PlusJakartaDisplay', 'sans-serif'],
      serif: ['Playfair Display', 'sans-serif'],
      mono: ['PT Mon', 'monospace'],
      htmlCodes: ['Dancing Script', 'cursive'],
    },
    extend: {
      colors: {
        primary: '#36117e',
        paccent: '#eceafc',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['group-hover'],
      transform: ['group-hover'],
    }
  },
  plugins: [],
}
