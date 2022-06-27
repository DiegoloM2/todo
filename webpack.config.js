// webpack.config.js
var path = require('path');

module.exports = {
  context: __dirname,
  entry: "./src/entry.jsx",
  output: {
    path: path.resolve(__dirname),
    filename: "./bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/, //exclude files in node modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react', '@babel/env']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};