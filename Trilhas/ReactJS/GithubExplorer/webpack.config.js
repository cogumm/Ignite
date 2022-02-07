const resolve = require("path");

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, 'src', 'Index.jsx'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ],
  }
};
