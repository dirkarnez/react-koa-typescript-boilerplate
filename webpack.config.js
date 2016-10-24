module.exports = {
    entry: './app/main.tsx',
    output: {
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
        ]
    }
};