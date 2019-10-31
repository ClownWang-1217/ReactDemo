
const HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');
module.exports = {
    mode:'development',
    devtool: 'inline-source-map',
    entry:
    {
        component:'./src/scripts/component.js',
        index:'./src/scripts/index.js',
        jsdemo:'./src/scripts/jsdemo.js',
        jsdemob:'./src/scripts/jsdemob.js',
        jsdemoc:'./src/scripts/jsdemoc.js',
        nav:'./src/scripts/nav.js',
        style:'./src/scripts/redux/src/index.js'
    },
    output:{
        filename:'scripts/[name].js',
        path:path.resolve(__dirname,'dist')
    },

    module:{
        rules:[
            {
                // 只命中src目录里的js文件，加快 Webpack 搜索速度
                include: path.resolve(__dirname, 'src'),
                test: /\.js$/,
                use: [{ loader: 'babel-loader' }],
                // 排除 node_modules 目录下的文件
                exclude: path.resolve(__dirname, 'node_modules'),
            },
            {
                include: path.resolve(__dirname, 'src'),
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ],
                
                exclude: path.resolve(__dirname, 'node_modules'),
            },
            {
                include:path.resolve(__dirname, 'src'),
                test:/\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                exclude: path.resolve(__dirname, 'node_modules'),
            },
            {
                include:path.resolve(__dirname, 'src'),
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ],
                exclude: path.resolve(__dirname, 'node_modules'),
            },
            {
                include: path.resolve(__dirname, 'src'),
                test:/\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options:{
                    name:'images/[name].[ext]'
                },
                exclude: path.resolve(__dirname, 'node_modules'),
            },
            {
                include: path.resolve(__dirname, 'src'),
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader'
                ],
                exclude: path.resolve(__dirname, 'node_modules'),
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Component',
            template: 'src/views/index.html',//html参照模板
            filename: 'views/index.html',//最终打包后的html文件名
            inject: "body",//插入到head部 否则 false
            chunks: ['component'],
            // minify:{//压缩
            //     removeComments:true,//移除注释
            // },
        }),
        new HtmlWebpackPlugin({
            title:'Component',
            template: 'src/views/root.html',//html参照模板
            filename: 'views/root.html',//最终打包后的html文件名
            inject: "body",//插入到head部 否则 false
            chunks: ['index'],
            // minify:{//压缩
            //     removeComments:true,//移除注释
            // },
        })
    ],
    externals: ['tls', 'net', 'fs'],
}