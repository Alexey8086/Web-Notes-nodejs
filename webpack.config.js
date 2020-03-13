const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',

    entry: {
        main: './js/main.js',
        home: './js/home.js',
        createNotes: './js/createNotes.js',
        backend: './backend-interactions.js',
    },
    // Позволяет не прописывать в ручную расширение для каждого файла
    // resolve: {
    //     extensions: ['.js', '.json', '.png']
    // },
    output: {
        filename: 'js/[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [

        new HTMLWebpackPlugin({
            hash: true,
            template: './main.html',
            chunks: ['backend', 'main'],
            filename: './html/main.html'
        }),

        new HTMLWebpackPlugin({
            hash: true,
            template: './home.html',
            chunks: ['backend', 'home'],
            filename: './html/home.html'
        }),

        new HTMLWebpackPlugin({
            hash: true,
            template: './createNotes.html',
            chunks: ['backend', 'createNotes'],
            filename: './html/createNotes.html'
        }),

        new CleanWebpackPlugin()

    ],
    
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[contenthash].[ext]',
                        outputPath: 'img/',
                        useRelativePath: true,
						publicPath: '../img/'
                    },
                }],
                
                
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            }
        ]
    }
}