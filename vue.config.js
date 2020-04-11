module.exports = {
  lintOnSave:false,
  devServer: {
    proxy: {
      '/v1': {
        target: 'http://129.28.159.96:7001',
      }
    }
  }
}