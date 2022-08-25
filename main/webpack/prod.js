const paths = require('./paths.js');

const base = require('./base.js');
const {merge} = require('webpack-merge');

module.exports = merge(base, {
	output: {
		filename: 'module.js',
		path: paths.build,
        publicPath: './'
	}
});