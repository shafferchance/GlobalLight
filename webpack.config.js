const path = require('path');

module.exports = {
    entry: __dirname + "/src/index.js",
    devtool: "source-map",
    output: {
        path: __dirname + "/dist",
        filename: "react-global-light.js",
        library: "reactGlobalLight",
        libraryTarget: "umd",
        umdNamedDefine: true,
        globalObject: "typeof self !== 'undefined' ? self : this"
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
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    mode: "development"
}