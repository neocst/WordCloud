'use strict'
 
const path = require('path');
const _dirname = path.resolve();

module.exports = {
    entry: {
        main: ['./src/main.js']
    },
    output: {
        path: path.resolve(_dirname, './build'), 
        filename: '[name].js'

    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(_dirname, './src'),
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [],
    devServer: {
        static: {
            directory: path.join(__dirname, './public'),
          },
        compress: true,
        host: 'localhost',
        port: 8080
    }
}