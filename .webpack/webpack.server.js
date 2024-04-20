const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
  mode: "production",
  name: "server",
  target: "node",
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss']
  },
  entry: {
    server: path.resolve(__dirname, "..", "server", "src", "index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "..", "output"),
    filename: "server.js",
  },
  externals: [nodeExternals()],
  node: {
    __dirname: false,
  },
};
