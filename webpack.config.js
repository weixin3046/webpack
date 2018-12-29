const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
//const webpack = require('webpack'); // 用于访问内置插件

module.exports = {
    entry: './src/index.js', //入口
    output: { //出口
        path: path.resolve(__dirname, 'dist'), //生成文件的路径
        filename: 'bundle.js' //生成文件的名字
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' } //test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。use 属性，表示进行转换时，应该使用哪个 loader。
        ]
    }
    /**
     * 嘿，webpack 编译器，当你碰到「在 require()/import 语句中被解析为 '.txt' 的路径」时，在你对它打包之前，先使用 raw-loader 转换一下。”
     */
    /**
     * 想要使用一个插件，你只需要 require() 它，然后把它添加到 plugins 数组中。多数插件可以通过选项(option)自定义。
     * 你也可以在一个配置文件中因为不同目的而多次使用同一个插件，这时需要通过使用 new 操作符来创建它的一个实例。
     */
    // plugins: [
    //     new HtmlWebpackPlugin({ template: './src/index.html' }) //插件列表地址https://www.webpackjs.com/plugins
    // ]
};