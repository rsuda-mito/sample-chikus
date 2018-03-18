const path = require('path');

const src = path.join(__dirname, '/src');
const dist = path.join(__dirname, '/public/dist');

module.exports =  {
    mode: 'development',
    entry:  src + '/index.js',

    output: {
        path: dist,
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                                presets: ['env', 'react', 'es2015']
                        },
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};