const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SentryWebpackPlugin = require('@sentry/webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].bundle.[contentHash:8].js',
    publicPath: '/loteria/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
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
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
  },
  devtool: 'source-map',
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
