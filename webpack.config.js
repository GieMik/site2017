const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const SuppressEntryChunksPlugin = require('./suppress-entry-chunks-plugin')

module.exports = {
	entry: {
		'core': [
			'babel-polyfill',
			path.resolve(__dirname, './dev/js/core.js')
		],
		'style': [
			path.resolve(__dirname, './dev/scss/style.scss'),
		],
		'grid': [
			path.resolve(__dirname, './dev/scss/grid.scss'),
		],
		'ie9-max-t-sm': [
			path.resolve(__dirname, './dev/scss/support/ie9-max-t-sm.scss'),
		],
		'ie9-t-sm': [
			path.resolve(__dirname, './dev/scss/support/ie9-t-sm.scss'),
		],
		'ie9-t-lg': [
			path.resolve(__dirname, './dev/scss/support/ie9-t-lg.scss'),
		]
	},
	output: {
		path: path.resolve(__dirname, './js'),
		publicPath: '/',
		filename: '[name].js'
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		},
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
		new SuppressEntryChunksPlugin(['grid', 'style', 'ie9-max-t-sm', 'ie9-t-sm', 'ie9-t-lg']),
		new ExtractTextPlugin('../css/[name].css'),
		new webpack.DefinePlugin({
			'process.env': {
			NODE_ENV: '"development"'
		}
		}),
	]
}

if (process.env.NODE_ENV === 'production') {
	// module.exports.devtool = ''
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
