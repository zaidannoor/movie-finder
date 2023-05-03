/*global __dirname,require,module*/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      /* style and css loader */
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,    
        use: [
          {
            "loader": "file-loader",
            "options": {
              "name": '[name].[ext]',
              "outputPath": "img/",
              "publicPath": "img/"
            }
          }
        ],
      },
    ],
  },
  /* plugin */
  plugins: [
    /* HTML Webpack Plugin */
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: 'index.html',
    }),
  ],
};
