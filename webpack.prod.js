const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
mode: "production",
optimization: {
    minimizer:[new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: 'prod.css'
    }),
    new HtmlWebpackPlugin({
     template: 'public/index.html'
    }),
    new CleanWebpackPlugin({}),
  ],
  entry:[
  './src/index.scss',
  './src/index.jsx',
],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      'css-loader',
      'sass-loader',
    ],
  },
],
},
resolve: {
    extensions: [ '.jsx', '.js' ]
  },
output: {
    filename: 'prod.js',
    path: path.resolve(__dirname, 'build-prod/0.0.1')
  },
externals: {
    'react': "React",
    'react-dom': "ReactDOM"
  },
};
