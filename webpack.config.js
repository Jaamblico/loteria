const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // base html
    }),
  ],
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // output folder
    publicPath: '/',
  },
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
