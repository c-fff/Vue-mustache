const {resolve}=require('path');

module.exports = {
    //开发模式
    mode:'development',
//    入口
    entry:'./src/index.js',
//    打包到什么文件
    output:{
        filename:'bundle.js'
    },
//  配置
    devServer:{
        contentBase:resolve(__dirname,"www"),
        compress:false,
        port:8080,
        publicPath:"/xuni/"
    }
};