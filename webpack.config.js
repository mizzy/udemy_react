const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
 
const publicDir = path.join(__dirname, '/public');
module.exports = [
    {
        mode: 'development',
        devServer: {
            historyApiFallback: true,
            contentBase: publicDir,
        },
    },
    {
        mode: 'development',
        entry: [
            './src/index.js',
        ],
        output: {
            path: publicDir,
            publicPath: '/',
            filename: 'bundle.js',
        },
        module: {
            rules: [{
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                },
            }],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
    },
    {
        mode: 'development',
        entry: {
            style: './stylesheets/index.scss',
        },
        output: {
            path: publicDir,
            publicPath: '/',
            filename: 'bundle.css',
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
                },
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }),
                },
            ],
        },
        plugins: [
            new ExtractTextPlugin('bundle.css'),
        ],
    },
];
