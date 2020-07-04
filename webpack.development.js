const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress:true
  },
  devtool: 'inline-source-map',


});
