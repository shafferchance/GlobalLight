module.exports = {
    input: "./src/index.js",
    output: {
        file: './lib/react-global-light.js',
        format: "cjs"
    },
    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
        }),
        babel({
            exclude: "**/node/modules/**"
        }),
        resolve(),
        commonjs()
    ],
    external: id => /^react|react-dom/.test(id)
};