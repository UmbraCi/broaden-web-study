const path = require("path");

module.exports = {
  mode: "none",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
    publicPath:'dist/'
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /.png$/,
      //   use:'file-loader'
      // }
      {
          test:/.png$/,
          use:{
              loader:'url-loader',
              options:{
                  limit:10 * 1024,  //10KB
              }
          }
      },
    ],
  },
};
