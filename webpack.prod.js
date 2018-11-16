const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-flow']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: 'css/style.min.css'
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/fonts',
        to: path.resolve(__dirname, 'dist/fonts'),
        cache: true
      },
      {
        from: 'src/img',
        to: path.resolve(__dirname, 'dist/img'),
        cache: true
      },
      {
        from: 'src/favicon',
        to: path.resolve(__dirname, 'dist/favicon'),
        cache: true
      },
      {
        from: 'src/index.html',
        to: path.resolve(__dirname, 'dist'),
        toType: 'dir'
      }
    ]),
    new HtmlWebpackPlugin({
      title: 'Webpack plugin file',
      template: 'src/index.html'
    })
    // new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
