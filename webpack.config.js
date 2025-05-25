const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',
  output: {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist'),
  assetModuleFilename: 'images/[hash][ext][query]'
},

  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.json$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: './public/index.html',
    minify: false
  }),
  new CopyWebpackPlugin({
    patterns: [
      { from: 'src/assets', to: 'assets' }, // ✅ copies JSON to dist/assets
      // { from: 'src/images', to: 'images' }  // ✅ optional, copies images
    ]
  })
],

  devServer: {
    static: './dist',
    port: 3000
  }
};
