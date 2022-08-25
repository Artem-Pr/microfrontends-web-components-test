const paths = require('./paths.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const base = require('./base.js');
const {merge} = require('webpack-merge');

const optimization = () => {
	const config = {
		// splitChunks: {
		// 	chunks: 'all'
		// }
	};
	config.minimizer = [
		new TerserWebpackPlugin(),
		new CssMinimizerPlugin()
	];
	
	return config;
};

module.exports = merge(base, {
	output: {
		filename: 'module-app.js',
		path: paths.build,
        publicPath: './'
	},
	optimization: optimization(),
	plugins: [
		new BundleAnalyzerPlugin({
			analyzerMode: 'disabled',
			generateStatsFile: true,
			statsOptions: {source: false}
		}),
		new MiniCssExtractPlugin()
	],
});
