const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SentryWebpackPlugin = require('@sentry/webpack-plugin')
const pkg = require('./package.json')

const applicationVersion = pkg.version
const developmentPublicPath = 'http://localhost:9000/loteria/'
const productionPublicPath = '/loteria/'

const definitions = {
  APP_VERSION: JSON.stringify(applicationVersion),
  SENTRY_API_TOKEN: process.env.SENTRY_API_TOKEN,
  SENTRY_DSN: process.env.SENTRY_DSN,
}

const client = argv => {
  const config = {
    name: 'client',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './build'),
      filename: '[name].bundle.[contentHash:8].js',
      publicPath:
        argv.mode === 'development'
          ? developmentPublicPath
          : productionPublicPath,
    },
    plugins: [
      new webpack.DefinePlugin(definitions),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
      }),
      new SentryWebpackPlugin({
        authToken: process.env.SENTRY_API_TOKEN,
        org: 'solwin',
        project: 'loteria-de-babilonia',
        urlPrefix: productionPublicPath,
        release: applicationVersion,
        include: path.resolve(__dirname, 'build'),
        ignore: ['node_modules', 'webpack.config.js'],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      compress: true,
      port: 9000,
    },
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  }

  return config
}

module.exports = client
