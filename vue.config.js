const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '192.128.100.1'
module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
    config.resolve.alias.set('_c', resolve('src/components'))
  },
  // 打包不生成.map文件
  productionSourceMap: false,
  devServer: {
    // 跨域配置
    proxy: 'http://localhost:4000'
  }
}
