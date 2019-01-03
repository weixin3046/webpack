const path = require('path');

module.exports = {
	/**
	 * filename 名称
	 * path 	路径
	 */
	entry: { //入口
		main: './src/index.js'
	},
	output: { //出口
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	}
};