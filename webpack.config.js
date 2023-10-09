const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FirstPlugin = require("./plugins/first-plugin");
const FileListPlugin = require("./plugins/filedlist-plugin");

module.exports = {
  entry: {
    page1: "./src/page/page1/index.tsx",
    page2: "./src/page/page2/index.tsx",
    page3: "./src/test.txt"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.module\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
        exclude: /\.module\.less/,
      },
      {
        test: /\.txt$/,
        use: [{
          loader: path.resolve('loaders/first-loader.js'),
        }],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/page/page1/index.html",
      filename: "page1.html",
      chunks: ["page1"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/page/page2/index.html",
      filename: "page2.html",
      chunks: ["page2"],
    }),
    new FirstPlugin(),
    new FileListPlugin()
  ],
};
