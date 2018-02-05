var webpack = require('webpack');

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var WebpackMd5Hash = require('webpack-md5-hash');

var CleanWebpackPlugin = require('clean-webpack-plugin');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var isProduction = function () {
    return process.env.NODE_ENV === 'production';
};
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var plugins;

if (isProduction()) {

    plugins = [

        new WebpackMd5Hash(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'js/[name]_[chunkhash].js'
        }),
        new HtmlWebpackPlugin({
            template: ROOT_PATH + '/index.html',
            filename: 'index.html'
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            test: /(\.jsx|\.js)$/,
            compress: {
                warnings: false,
                screw_ie8: false,
                unused: true
            },
            mangle: {
                screw_ie8: false
            },
            output: {
                screw_ie8: false,
                comments: false
            }

        }),
        new webpack.optimize.DedupePlugin(),
        new CleanWebpackPlugin([BUILD_PATH], {
            root: __dirname,
            verbose: true,
            allowExternal: true
        }),
        new ExtractTextPlugin('css/common_[chunkhash].css')
    ];

} else {

    plugins = [

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'js/[name]_[chunkhash].js'
        }),
        new HtmlWebpackPlugin({
            template: ROOT_PATH + '/index.html',
            filename: 'index.html'
        }),
        new ExtractTextPlugin('css/common_[chunkhash].css')
    ];
}


var config = {

    entry: {
        index: SRC_PATH + '/entry.js',
        vendor: ["babel-polyfill", "react", "react-dom", "react-router", "react-redux", "redux", "antd"]
    },
    output: {
        path: BUILD_PATH, //release 到本地的路径
        publicPath: '/',//文件路径替换
        chunkFilename: "js/[name]_[chunkhash].js",
        filename: "js/[name]_[chunkhash].js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel' // 'babel-loader' is also a valid name to reference
            },
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css!autoprefixer')},
            {test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!less')},
            {test: /\.png$/, loader: "url?limit=8192&name=img/[name].[ext]"}
        ],
        postLoaders: [
            {
                test: /\.js$/,
                loaders: ['es3ify-loader']
            }
        ]
    },
    plugins: plugins,
    resolve: {
        //自动扩展文件后缀名，意味着我们require/import模块可以省略不写后缀名
        extensions: ['', '.web.js', '.js', '.jsx', '.less', '.scss', '.css', '.json', '.png', '.jpg', '.jpeg'],
    },
    //如果需要代理到RD的电脑上可通过此处配置IP&&端口
    devServer: {
        //host: "192.168.4.107",
        port: "8088",
        proxy: {
            '/**': {
                target: 'http://localhost:3000',
                secure: false,
                changeOrigin: true
            }
        }
    },
    devtool: !isProduction() ? 'cheap-module-source-map' : 'source-map' //debug时将包里的js对应到源码
};

module.exports = config;