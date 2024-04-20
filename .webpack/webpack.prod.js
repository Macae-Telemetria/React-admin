const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.config");

const OUTPUT_DIR = path.resolve(__dirname, "..", "output", "static");

module.exports = merge(common, {
  mode: "production",

  output: {
    path: OUTPUT_DIR,
    filename: '[name]/[fullhash].bundles.js',
  },

});
