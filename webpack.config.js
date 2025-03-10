const path = require('path');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode,

  entry: "./client/components/App.jsx",

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.jsx$/,
        exclude: /node_modules/,
      },
      {
        test: /\.(sass|css|scss)$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ["file-loader"],
      },
    ],
  },

  devServer: {
    static: path.join(__dirname, "build"),

    compress: true,

    port: 8080,

    hot: true,

    historyApiFallback: true,

    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  
  devtool: "eval-cheap-module-source-map",
};
