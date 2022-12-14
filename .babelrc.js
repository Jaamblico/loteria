module.exports = {
  presets: [['@babel/preset-env', { modules: false }], ['@babel/preset-react']],
  plugins: [
    ['@babel/plugin-transform-runtime', { regenerator: true }],
    ['babel-plugin-styled-components', { ssr: false }],
  ],
}
