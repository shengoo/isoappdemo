var path = require('path');

module.exports = {
	entry: {
		app: './src/client/app.js',
	},
	
	resolve: {
		extensions: ['.ts', '.js'],
	},

	output: {
		path: path.resolve(__dirname, 'public/javascripts'),
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
	},

	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			}
		]
	}
}
