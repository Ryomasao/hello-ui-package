const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/main.tsx',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      react: path.resolve('./node_modules/react'),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8888,
    host: '0.0.0.0',
  },
}
