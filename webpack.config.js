const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'react']
        }
      }, {
        test: /\.css$/,
        loader: 'style-loader'
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  }
};
