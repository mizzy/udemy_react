const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
 
const publicDir = path.join(__dirname, '/public');
module.exports = [
    {
        entry: [
            './src/index.jsx',
        ],
        output: {
            path: publicDir,
            publicPath: '/',
            filename: 'bundle.js',
        },
        devServer: {
            historyApiFallback: true,
            contentBase: publicDir,
        },
        module: {
            rules: [{
                test: /\.js(x)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015'],
                    },
                }],
            }],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
    },
    {
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
