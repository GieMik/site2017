module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['ie >= 8', '> 1%', 'last 5 versions'],
      grid: true,
      flex: true
    })
  ]
};