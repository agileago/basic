const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  lintOnSave: false,
  chainWebpack: (config) => {
    config.plugins.delete('preload')
    config.plugin('html').tap((args) => {
      args[0].minify = false
      return args
    })
    // svg-sprit-loader
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons')) // 处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
    // vue等资源直接在html里面cdn引入 必要时可替换成本地资源文件
    // config.externals({})
  },
  devServer: {
    disableHostCheck: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://192.168.1.199:12005',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  },
}
