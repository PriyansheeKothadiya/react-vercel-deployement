module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed',
        accent: '#06b6d4',
        glass: 'rgba(255,255,255,0.06)'
      },
      boxShadow: {
        'soft-lg': '0 10px 30px rgba(2,6,23,0.6)'
      }
    }
  },
  plugins: []
}
