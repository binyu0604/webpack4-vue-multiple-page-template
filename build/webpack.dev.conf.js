process.env.NODE_ENV = "development"

const merge = require("webpack-merge")
const webpack = require("webpack")
const notifier = require("node-notifier")
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin")

const utils = require("./utils")
const config = require("../config")
const webpackBaseConfig = require("./webpack.base.conf")
const packageConfig = require("../package.json")

const {
  pages
} = require("../config/pages")

const host = utils.getIPAdress();
const port = 8083;

const rewrites = pages.reduce((sum, page) => {
  return sum.concat({
    from: new RegExp(`\/${page.name}/.*`),
    to: `/${page.name}/index.html`
  })
}, [])

function createNotifierCallback() {
  return (severity, errors) => {
    if (severity !== "error") return
    var error = errors[0]
    var filename = error.file && error.file.split("!").pop()
    notifier.notify({
      title: packageConfig.name,
      message: `${severity}: ${error.name}`,
      subtitle: filename || ""
    })
  }
}

module.exports = merge(webpackBaseConfig, {
  mode: "development",
  devtool: config.dev.devtool,
  devServer: {
    clientLogLevel: "warning",
    hot: true,
    compress: true,
    quiet: true,
    host,
    port,
    open: true,
    openPage: "hello/home/top",
    overlay: {
      warnings: false,
      errors: true
    },
    publicPath: "/",
    watchOptions: {
      ignored: /node_modules/,
      poll: false
    },
    // proxy: {
    //   "/demo/": {
    //     target: "http://...",
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/demo/": "/demo/"
    //     }
    //   }
    // },
    historyApiFallback: {
      rewrites
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": "'development'"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin({
      clearConsole: true,
      compilationSuccessInfo: {
        messages: [`开发环境启动成功，项目运行在: http://${host}:${port}`]
      },
      onErrors: createNotifierCallback()
    })
  ]
})