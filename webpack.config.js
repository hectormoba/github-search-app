const path = require('path');
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  plugins: [
    new Dotenv()
  ],
  resolve:{
    extensions: ['*','.js', '.jsx'],
    // alias: {
    //   '@': path.resolve(__dirname, 'src'),
    //   '@assets': path.resolve(__dirname, 'src/assets'),
    //   '@components': path.resolve(__dirname, 'src/components')
    // }
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './dist')
    },
    compress: true,
    hot: true,
    open: true,
    port: 9000
  },
}