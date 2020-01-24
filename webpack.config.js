const path = require('path');

module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "react-global-light.js",
        library: "reactGlobalLight",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
        ]
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom'
    },
    mode: "development"
}