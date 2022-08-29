const paths = require('./paths.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	context: process.cwd(),
	entry: paths.entry,
	resolve: {
		modules: ['node_modules'],
		extensions: ['.jsx', '.js'],
		alias: {
			'@Component': paths.alias.components,
			'@Api': paths.alias.api
		}
	},
	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				exclude: paths.nodeModules,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader'
					}
				]
			},
		]
	}
};
