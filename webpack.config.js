const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'budle.js',
    path: path.resolve(__dirname, '/dist'),
    publicPath: 'dist'
  }
}