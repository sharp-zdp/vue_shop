module.exports = {
  devServer: {
    open: true
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:3000",
    //     pathRewrite: {"^/api" : ""}
    //   }
    // }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({ // 把px单位换算成rem单位
            rootValue: 75, // 换算的基数(设计图750的根字体为75,如果设计图为640:则rootValue=64)
            propList: ['*']
          })
        ]
      }
    }
  }
}
