module.exports = {
    mode: "production",
    entry: __dirname + "/web-src/index.tsx",
    output: {
        path: __dirname + "/web-public/js",
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader',
                exclude: /node_modules/,
            },
        ],
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
}