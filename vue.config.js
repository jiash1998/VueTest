const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false
// },)
module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    //这是vue项目启动端口
    // port: 8081,
    // open: false,
    // 测试 apifox
    proxy: {
      // 直接用通配符 '/' 会报错
      "/apis": {
        //这里你把端口改成你后端端口就行，
        target: "http://127.0.0.1:4523/m1/1358838-0-default",
        // ws: true,
        changeOrigin: true, //创建一个虚拟服务器，
        pathRewrite: {
          "^/apis": "" //通配符
        }
      },
    },
  },
};