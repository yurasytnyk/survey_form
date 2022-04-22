const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/index.js',
  },
  devServer: {
    static: './dist',
    client: {
      logging: 'none',
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          miniCss.loader,
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true, // <-- !!IMPORTANT!!
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new miniCss({
      filename: 'css/style.css',
    }),
    new CssMinimizerPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new HtmlMinimizerPlugin(),
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
};
