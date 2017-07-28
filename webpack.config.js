var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    entry: APP_PATH,
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js',
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'hello world app'
        })
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 8888,
        //progress: true,
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
                include: APP_PATH
            },
            // {
            //     test: /\.scss$/,
            //     loaders: ['style-loader', 'css-loader', 'sass'],
            //     include: APP_PATH
            // }
        ]
    },

};