module.exports = {
    mode: 'development',
    entry: './src/main.jsx',
    output: {
        path: __dirname,
        filename: 'dist/bundle.js'
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
                    "presets": [
                        "@babel/preset-react",
                    ],
                }
            }, {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    }
};
