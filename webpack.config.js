const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (arg) => {
  const config = {
    mode: arg || 'development',

    entry: './src/index.tsx',

    output: {
      path: path.resolve('build'),
      filename: 'index.js'
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },

    devServer: {
      port: 3005,
      host: 'localhost',
      hot: true
    },

    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /(node_modules)/,
          use: [{
            loader: 'ts-loader',
            options: {
              logLevel: 'info',
              configFile: path.resolve('.', 'tsconfig.json')
            }
          }],
        }
      ]
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ template: './public/index.html' })
    ]
  }

  return config
}
