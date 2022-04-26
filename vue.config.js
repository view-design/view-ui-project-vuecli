const { defineConfig } = require('@vue/cli-service')

console.log('env', process.env)

const { NODE_ENV, VUE_APP_TITLE = '' } = process.env

console.log('NODE_ENV', NODE_ENV)

const config = {
  transpileDependencies: false,
  chainWebpack: setting => {
    setting.plugin('html').tap(args => {
      args[0].APP_TITLE = VUE_APP_TITLE
      return args
    })
    setting.module.rule('less').test(/\.less$/)
    .use('less').loader('less-loader').options({
      lessOptions: {
        modifyVars: {
          hack: `true; @import "${path.resolve(__dirname, 'src/styles/variable.less')}";`,
        }
      }
    });
  },
  devServer: {
    open: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://localhost:8080',
        changeOrigin: true
      }
    }
  }
}

module.exports = defineConfig(config)
