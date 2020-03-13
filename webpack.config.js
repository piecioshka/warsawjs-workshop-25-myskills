const path = require('path');
const root = __dirname;

module.exports = {
    mode: 'development',

    devtool: 'inline-source-map',

    entry: path.join(root, 'src', 'scripts', 'main.jsx'),

    output: {
        filename: 'bundle.js',
        path: path.join(root, 'dist')
    },

    resolve: {
        extensions: ['.jsx', '.js', '.json']
    },

    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    'presets': [
                        '@babel/preset-react',
                    ],
                }
            },
            {
                test: /\.scss$/,
                use: [
                    // creates style nodes from JS strings
                    'style-loader',
                    // translates CSS into CommonJS
                    'css-loader',
                    // compiles Sass to CSS, using Node Sass by default
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'file-loader',
                options: { name: '[name].[ext]' }
            },
        ]
    }
};
