
// const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer:{
        port:8080,
      },
      plugins:[
        new HtmlWebpackPlugin(),
      ]
}