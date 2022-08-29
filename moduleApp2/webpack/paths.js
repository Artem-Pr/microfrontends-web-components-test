const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
	nodeModules: resolveApp('node_modules'),
	build: resolveApp('build'),
	src: resolveApp('src'),
	entry: resolveApp('src/index.js'),
	html: resolveApp('src/index.html'),
	types: resolveApp('node_modules/@types'),
	resolveModules: [resolveApp('src'), 'node_modules'],
    alias: {
        components: resolveApp('src/components'),
        api: resolveApp('src/api')
    }
};
