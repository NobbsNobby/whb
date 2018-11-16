const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, "src")
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-flow'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack plugin file',
      template: 'src/index.html'
    }),
    // new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
};
