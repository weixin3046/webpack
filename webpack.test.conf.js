const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清除文件
var webpack = require('webpack');
let pathsToClean = [
	'dist',
]

module.exports = {
	/**
	 * entry 表示源文件，output 这边表示的是输出的目标文件
	 * filename 名称
	 * path 	路径
	 */
	entry: { //入口
		app: [path.join(__dirname, 'src', 'app.js'),
			'webpack-dev-server/client?http://localhost:8080/'
		]
	},
	devServer: { //服务器
		port: 9000, //端口
		open: true, //自动打开浏览器
		contentBase: path.join(__dirname, "dist"), //它指定了服务器资源的根目录，如果不写入contentBase的值，那么contentBase默认是项目的目录。
		overlay: true, //这个配置属性用来在编译出错的时候，在浏览器页面上显示错误
		hot: true,
		inline: true
	},
	output: { //出口
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	//插件都在plugins对象里配置
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin(pathsToClean), //清除之前打包文件
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'app.html', //更改生成文件的名字
			//可以把生成的 index.html 文件的内容的没用空格去掉，减少空间
			minify: {
				collapseWhitespace: true,
			},
			//hash: true 为了更好的 cache，可以在文件名后加个 hash
			hash: true,
			excludeChunks: ['contact']
		}),
		new HtmlWebpackPlugin({
			template: './src/contact.html',
			filename: 'contact.html', //更改生成文件的名字
			//可以把生成的 index.html 文件的内容的没用空格去掉，减少空间
			minify: {
				collapseWhitespace: true,
			},
			//hash: true 为了更好的 cache，可以在文件名后加个 hash
			hash: true,
			chunks: ['contact']
		}),
		// excludeChunks 指的是不包含， chunks 代表的是包含。
		//new ExtractTextPlugin('style.css'),
		// new MiniCssExtractPlugin({
		// 	filename: '[name].css',
		// 	chunkFilename: '[id].css',
		// })
	],
	module: {
		//在webpack3.x中还保留之前版本的loaders，与rules并存都可以使用，在新版中完全移除了loaders，必须使用rules。
		rules: [{
			// test: /\.scss$/, //test: /\.css$/
			// // use: ['style-loader', 'css-loader', 'sass-loader']
			// // 把 SASS 或 CSS 处理好后，放到一个 CSS 文件中
			// use: [
			// 	MiniCssExtractPlugin.loader, //https://www.npmjs.com/package/mini-css-extract-plugin
			// 	"css-loader",
			// 	"sass-loader"
			// ]
			//这是extract-text-webpack-plugin插件的使用方法目前webpack4不支持
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',// 编译后用什么loader来提取css文件
				//resolve-url-loader may be chained before sass-loader if necessary
				use: ['css-loader', 'sass-loader']
			})
		}]
	}
};