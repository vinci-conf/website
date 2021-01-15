const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env) {
    const plugins = [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './source/pug/index.pug',
            inject: false
        })
    ];
    return merge(common(env), {
        plugins,
        mode: 'production'
    });
};
