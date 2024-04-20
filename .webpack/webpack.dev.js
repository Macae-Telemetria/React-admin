const { merge } = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    headers: {
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*',
    },
    devMiddleware: {
      writeToDisk: true,
    },
    historyApiFallback:{
      disableDotRule: false,
      rewrites: [                  
        { from: "^/", to: "/admin/index.html"},
      ]
    },
    open: true,
    hot: true,
    port: 7070,
  }
});
