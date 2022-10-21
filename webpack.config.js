const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SentryWebpackPlugin = require('@sentry/webpack-plugin')

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      inject: true,
    }),
    new SentryWebpackPlugin({
      authToken: process.env.SENTRY_AUTH_TOKEN,
      org: 'solwin',
      project: 'loteria-de-babilonia',
      include: 'build',
      configFile: 'sentry.properties',
      release: process.env.SENTRY_RELEASE,
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'assets/js/[name].[contenthash:8].js',
    publicPath: '/loteria/',
  },
  devtool: 'source-map',
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
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader', // for styles
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@/utils': path.resolve(__dirname, 'src/utils'),
      '@/components': path.resolve(__dirname, 'src/Components'),
      '@/constants': path.resolve(__dirname, 'src/constants'),
      '@/context': path.resolve(__dirname, 'src/Context'),
      '@/hooks': path.resolve(__dirname, 'src/Hooks'),
      '@/services': path.resolve(__dirname, 'src/Services'),
      '@/widgets': path.resolve(__dirname, 'src/Widgets'),
      '@/assets': path.resolve(__dirname, 'src/assets'),
    },
  },
}
