const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const PORT = 9000;

module.exports = {
    entry: "./src/app.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            "@src": path.resolve(__dirname, "src/"),
            "@interfaces": path.resolve(__dirname, "src/interfaces/"),
            "@store": path.resolve(__dirname, "src/store/"),
            "@enums": path.resolve(__dirname, "src/enums/"),
            "@controllers": path.resolve(__dirname, "src/controllers/"),
            "@services": path.resolve(__dirname, "src/services/"),
            "@directives": path.resolve(__dirname, "src/directives/"),
        },
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body",
        }),
        new CopyWebpackPlugin({
            patterns: [{from: "src/views", to: "views"}],
        }),
    ],
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: PORT,
        historyApiFallback: true,
        open: true,
        onListening: function (server) {
            console.log(`🚀 Server running at: http://localhost:${PORT}`);
        }
    },
    mode: "development",
};
