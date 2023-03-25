const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devtool: 'source-map',
    devServer: {
      client: {
        overlay: {
          warnings: false,
          errors: false,
        },
      },
    },
  },
})
