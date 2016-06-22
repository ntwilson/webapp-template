module.exports = [
    {
        name: "client",
        target: "web",
        context: __dirname,
        entry: './frontend/index.js',
        output: {
            path: __dirname + "/obj",
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                }
            ]
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    },
    {
        name: "server",
        target: "node",
        entry: "./src/app.js",
        output: {
            path: __dirname + "/obj",
            filename: "app.js"
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(html|css)$/,
                    loader: 'file-loader?name=[name].[ext]'
                }
            ]
        },
        resolve: {
            extensions: ['', '.js', '.html', '.css']
        }
    }
];
