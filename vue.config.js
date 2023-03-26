const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      extensions: ['*', '.js', '.vue', '.json']
    },
    entry: {
      app: './src/app.js' // Replace 'app.js' with the new file name you chose
    }
  }
})
