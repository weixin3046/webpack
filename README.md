
# 安装
 node -v
 npm -v 

 npm install -g webpack 全局安装
 npm install webpack-cli -g 


# 开始
 npm init
 npm install --save-dev webpack 局部安装在测试变量中


# 命令
 webpack ./src/app.js ./dist/app.bundle.js 把 ./src/app.js 作为源文件，把转化后的结果放到 ./dist/app.bundle.js 文件中
 监听文件多加一个参数(watch)
 webpack --watch ./src/app.js ./dist/app.bundle.js 

 webpack 打包 默认执行webpack.config.js

 webpack-dev-server 启动服务器

# 插件
 npm install --save-dev css-loader style-loader
 npm i clean-webpack-plugin --save-dev 清除文件

# react
  npm install --save react react-dom

  babel能把 react 代码转成一般浏览器可读可执行的代码，通常可以用它来转化 react 或 vue 这样的前端代码，或者把 es6 代码转成普通的 javascript 代码

  npm install --save-dev babel-core babel-preset-react babel-preset-env babel-preset-es2015 安装babel
  React preset https://babeljs.io/docs/plugins/preset-react/
  React Installation https://reactjs.org/docs/installation.html

  npm install --save-dev babel-loader 在 webpack 中使用一个 loader 来转化 react 的代码

# 更新
 增加sass语法；更换css转化插件mini-css-extract-plugin→extract-text-webpack-plugin