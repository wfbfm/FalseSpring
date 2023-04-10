var path = require('path');

module.exports = {
  entry: './src/main/js/index.js',
  devtool: 'eval-source-map',
  cache: true,
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'src/main/resources/static/built/'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[hash].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
};