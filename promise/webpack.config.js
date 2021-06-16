
// const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer:{
        port:8080,
        //静态资源文件夹
        // contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
      },
      plugins:[
        new HtmlWebpackPlugin(),
      ]
}