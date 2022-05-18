const path = require('path');
require('babel-polyfill');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        app: ['./js/app.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/js/[name].js',
        publicPath: "/",
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|png|svg|jpg|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                        name: `[path][name].[ext]`
                    }
                }
            }
        ]
    },
    optimization: {
        moduleIds: 'named'
    },
    plugins: [
        new MiniCssExtractPlugin({
	        filename: "assets/css/[name].css",
        }),
	    new HtmlWebpackPlugin({
		    filename: 'index.html',
		    template: path.resolve(__dirname, './index.html')
	    })
    ]
};