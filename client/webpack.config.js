const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/',
    },
    devServer: {
        port: 3000,
        open: true,
        hot: true,
        liveReload: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.svg'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'src'),
        ],
        alias: {
            styles: path.join(__dirname, 'src/styles'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|jsx|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.svg$/,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.svg$/,
                issuer: /\.(sc|c)ss$/,
                type: 'asset',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
        }),
    ],
};