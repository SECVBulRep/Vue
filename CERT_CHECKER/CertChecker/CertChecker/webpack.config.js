var path = require('path');
var webpack = require('webpack');


const bundleOutputDir = './wwwroot/dist';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var PROD = process.env.NODE_ENV === 'production';

module.exports = {
  context: __dirname,
  entry: { main: './App/app.js' },

  output: {
    path: path.join(__dirname, bundleOutputDir),
    filename: '[name].js',
    publicPath: 'dist/'
  },

  module: {
    rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'vue-style-loader',
            use: [
                { loader: 'css-loader', options: { minimize: PROD } }
            ]
          })
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              'scss': [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader'
              ],
              'sass': [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader?indentedSyntax'
              ]
            }
          }
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        },
        {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/
            , loader: 'url-loader?limit=100000'
        }

    ]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },

  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },

  performance: {
    hints: false
  },

  devtool: '#eval-source-map',

  plugins: PROD
      ? [
          new ExtractTextPlugin('styles.min.css'),
          new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
              warnings: false
            }
          })
      ]
      : [
          new ExtractTextPlugin('styles.css')
      ]
};

