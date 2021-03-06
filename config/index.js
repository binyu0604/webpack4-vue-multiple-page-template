var path = require('path')

function resolve(file) {
  return path.resolve(__dirname, "../", file)
}

module.exports = {
  dev: {
    env: require('./dev.env'),
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    host: "localhost",
    port: 8080,
    devtool: 'cheap-module-eval-source-map',
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    proxyTable: {}
  },
  build: {
    env: require('./prod.env'),
    assetsRoot: resolve('./dist'),
    assetsPublicPath: '/',
    assetsSubDirectory: 'static'
  }
}