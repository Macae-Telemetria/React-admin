const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const UI_SRC_DIR = path.resolve(__dirname, "..", "ui");
const OUTPUT_DIR = path.resolve(__dirname, "..", "output", "static");

module.exports = {
  target: "web",
  mode: 'development',

  entry: {
    admin: path.join(UI_SRC_DIR, "/apps/admin/index.tsx"),
  },

  output: {
    path: OUTPUT_DIR,
    filename: '[name]/index.bundles.js',
    assetModuleFilename: 'assets/images/[hash][ext][query]'
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", "scss"],
    alias: {
      "@ui": UI_SRC_DIR,
    },
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|gif|jpg|jpeg|webp|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.mp3$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "sound",
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './ui/apps/admin/template.html',
      filename: `./admin/index.html`,
      chunks: ["admin"]
    }),
  ],
};
