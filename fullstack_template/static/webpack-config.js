// const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
    entry:  __dirname + '/js/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                })
            },
            {
                test: /\.(png|ttf|svg|eot|woff|jpg|gif)$/,
                use: 'url-loader'
            },
        ],
        // loaders: [
        //   {
        //     test: /\.jsx?$/,
        //     exclude: /(node_modules)/,
        //     loader: 'babel-loader',
        //     query: {
        //       presets: ['react', 'es2014', 'stage-0'],
        //       plugins: ['transform-decorators-legacy'],
        //     }
        //   }
        // ],
    },

    plugins: [
        new ExtractTextPlugin('styles.css')
    ],

};

module.exports = config;
