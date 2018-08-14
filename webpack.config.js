var publicDir = __dirname + '/public';
module.exports = {
    mode: 'development',
    entry: [
        './src/index.js'
    ],
    output: {
        path: publicDir,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: publicDir
    }
};

