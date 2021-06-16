//引入nodejs 中的path模块中的 resolve
const { resolve } = require('path');

const htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {
    //webpack配置
    //入口起点
    entry: './src/index.js',
    //输出
    output:{
        //输出文件名
        filename: 'build.js',
        //输出路径 , 使用nodejs的path模块中的 resolve 方法(相当于java中的join)
        // __dirname 为 nodejs 中的一个变量, 为当前文件的所在路径
        path: resolve(__dirname, 'dist')
    },
    //配置loader
    module:{
        //配置什么文件用什么loader处理
    	rules:[
            {
                //test用正则
                test: /\.css$/,
                //use 设置这种文件使用哪些loader处理, css文件被这些loader处理的顺序是列表中的从尾到头
                use: [
                   'style-loader', //在html中创建style标签,将js中的样式字符串添加进去
                    'css-loader'  //将css文件变为commonjs模块加载到js中
                ]
            },
            {
                //vue-loader
                test: /\.vue$/,
                use:['vue-loader']
            }
        ]
	},
    //配置插件, 插件需要现在上面引入, 然后才能在这里配置
    plugins:[
        // new htmlwebpackplugin({
        //     template: './index.html'
        // })
    ],
    //设置模式 -- 开发模式
    // mode:'development',
    resolve:{
        alias:{
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    //设置了开发服务器后, 每次其实都是将更新编译的文件存到内存中, 不会更新本地的文件
    // devServer: {
    //     //设置要更新和运行的文件在哪里, 就是编译后的路径
    //     contentBase: resolve(__dirname, 'dist'),
    //     //是否实时监听
    //     inline: true,
    //     //设置使用 gzip 压缩, 这样能够提高更新速度
    //     compress : true,
    //     //服务开在哪个端口上
    //     port : 3000,
    //     //自动打开浏览器
    //     open: true
    // }
}