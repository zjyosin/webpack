const path = require("path")
const htmlWebPackPlugin = require("html-webpack-plugin") 
const webPackBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin 

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, "src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true
    },
    devtool: 'source-map',
    module:{
       rules: [
        {
            test: /\.scss$/, // means all file which have extention scss should use below loader
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test:/\.js$/, // This tells Webpack to apply Babel to all .js files
            exclude: /node_modules/, // Don't apply Babel to node_modules
            use:{
                loader: 'babel-loader'
            }
        },
        {
            test:/\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource'

        }
       ]
    },
    plugins: [
        new htmlWebPackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: './src/template.html'
        }),
        //new webPackBundleAnalyzer()
    ]
}