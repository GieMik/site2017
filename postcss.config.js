module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['ie >= 9', '> 1%', 'last 12 versions']
    })
  ]
};