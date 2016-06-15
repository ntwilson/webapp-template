module.exports = {
  context: __dirname + "/obj",
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + "/obj"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'jsx-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(cs)?(html)$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.html', '.cshtml']
  }
};