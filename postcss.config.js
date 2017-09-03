module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['ie >= 9', '> 1%', 'last 10 versions'],
      grid: true,
      flex: true
    })
  ]
};