const path = require('path');

module.exports = {
    entry: "./src/App.jsx",

    bail: true,

    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        libraryExport: "default",
        filename: "bundle.js"
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.json']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: true
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        query: {
                            name: 'static/media/[name].[hash:8].[ext]'
                        }
                    },
                ],
            },
        ]
    },
}