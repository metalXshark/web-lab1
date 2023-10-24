const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        clean: './src/js/Clean.js',
        init: './src/js/Init.js',
        r: './src/js/R.js',
        update: './src/js/Update.js',
        validator: './src/js/Validator.js',
        x: './src/js/X.js',
        y: './src/js/Y.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};