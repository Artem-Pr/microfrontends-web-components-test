const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const base = require('./base.js');
const paths = require('./paths.js');

module.exports = merge(base, {
	devtool: 'eval-source-map',
	devServer: {
		port: 8080,
        host: 'localhost',
		compress: true,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
        }
	},
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new MiniCssExtractPlugin()
    ],
});
