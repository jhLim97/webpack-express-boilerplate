const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: ['./src/frontend/app.js' ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
        publicPath: '/',
    },   
    devtool: 'eval-cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }, 
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset/resource',
            },
        ]
    }, 
    resolve: {
        alias: {
          Core: path.resolve(__dirname, 'src/frontend/core/'),
          Page: path.resolve(__dirname, 'src/frontend/page/'),
          Public: path.resolve(__dirname, 'src/frontend/public/'),
          Service: path.resolve(__dirname, 'src/frontend/service/'),
          Utils: path.resolve(__dirname, 'src/frontend/utils/'),
        },
    },
    plugins: [new HtmlWebpackPlugin(
        {
            template: './src/frontend/index.html'
        }  
    )]
}