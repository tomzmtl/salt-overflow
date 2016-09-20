const ExtractTextPlugin = require('extract-text-webpack-plugin');

const publicPath = path => `./public/${path}`;

module.exports = {

  entry: ['./src/client/app.js'],
  output: {
    filename: publicPath('js/bundle.js'),
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass'),
      },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  plugins: [
    new ExtractTextPlugin(publicPath('css/styles.css'), {
      allChunks: true,
    }),
  ],

};
