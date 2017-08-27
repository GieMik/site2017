const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: {
		core: [
			'babel-polyfill',
			path.resolve(__dirname, './dev/js/core.js')
		]
	},
	output: {
		path: path.resolve(__dirname, './js'),
		publicPath: '/',
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
								importLoaders: 1,
								url: false
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				})
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
		]
	},
	performance: {
		hints: false
	},
	devtool: '#source-map',
	plugins: [
		new ExtractTextPlugin('../css/style.css')
	]
}

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = ''
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
			NODE_ENV: '"production"'
		}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}
