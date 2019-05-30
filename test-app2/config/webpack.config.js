const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");

const SRC_DIR = path.resolve(__dirname, "../src");
const DIST_DIR = path.resolve(__dirname, "../dist");

module.exports = (_env, argv) => ({
    entry: `${SRC_DIR}/index.js`,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: `${SRC_DIR}/index.html`,
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename:
                argv.mode !== "production" ? "[name].css" : "[name].[hash].css",
            chunkFilename:
                argv.mode !== "production" ? "[id].css" : "[id].[hash].css"
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(scss|sass|css)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: argv.mode !== "production"
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: argv.mode !== "production",
                            importLoaders: 1,
                            localIdentName: "[local]"
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: {
                    loader: "html-loader",
                    options: { minimize: true }
                }
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    output: {
        path: DIST_DIR,
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "../dist",
        open: true,
        inline: true,
        hot: true,
        historyApiFallback: true,
        port: 8713
    }
});
