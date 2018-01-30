
var nodeExternals = require('webpack-node-externals');
var path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    JS: path.resolve(__dirname, 'client/src/js'),
    SRC: path.resolve(__dirname, 'client/src')
}

module.exports = [
    {
        name: 'Client-side application',
        entry: path.join(paths.JS, 'main.js'),
        output: {
            path: paths.DIST,
            filename: 'app.bundle.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(paths.SRC, 'index.html'),
            }),
            new ExtractTextPlugin('style.bundle.css'),
            new CopyWebpackPlugin([
                { from: path.join(paths.SRC, 'img'), to: 'img' }
            ]),
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader',]
                },
                { test: /\.json$/, loader: 'json-loader' },
                {
                    test: /\.(ttf|eot|woff|woff2)$/,
                    loader: "file-loader",
                    options: {
                        name: "./fonts/[name].[ext]",
                    },
                },
                {
                    test: /\.(s*)css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
                },
                {
                    test: /\.(png|jp(e*)g|svg)$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 8000, // Convert images < 8kb to base64 strings
                            name: './img/[hash]-[name].[ext]'
                        }
                    }]
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
    }
];
