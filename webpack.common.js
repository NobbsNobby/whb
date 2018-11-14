const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
  entry: './src/js/index.js',
  mode: 'development',
  devtool: 'source-map',
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
        test: /\.pcss$/,
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
      filename: '../css/style.min.css'
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
        from: 'src/index.html',
        to: path.resolve(__dirname, 'dist'),
        toType: 'dir'
      }
    ]
    )
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/js')
  }
};
