const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/backend-interactions.js',
        createNotes: './src/js/createNotes.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}