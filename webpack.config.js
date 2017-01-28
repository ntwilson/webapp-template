module.exports = [
    {
        name: "client",
        target: "web",
        context: __dirname,
        entry: './frontend/index.ts',
        output: {
            path: __dirname + "/obj",
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.jsx?$/,
                    loader: 'jsx-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader'
                }
            ]
        },
        resolve: {
            extensions: ['', '.ts', '.tsx', '.js', 'json']
        }
    },
    {
        name: "server",
        target: "node",
        entry: "./src/app.ts",
        output: {
            path: __dirname + "/obj",
            filename: "app.js"
        },
        module: {
            loaders: [
                {
                    test: /\.ts$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.jsx?$/,
                    loader: 'jsx-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader'
                },
                {
                    test: /\.(html|css)$/,
                    loader: 'file-loader?name=[name].[ext]'
                }
            ]
        },
        resolve: {
            extensions: ['', '.ts', '.js', 'json', '.html', '.css']
        }
    }
];
