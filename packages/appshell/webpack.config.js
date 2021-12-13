const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
    require("webpack").container.ModuleFederationPlugin;
const path = require("path");

module.exports = {
    entry: "./src/index",
    mode: 'development',
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        port: 3001,
        hot: true,
    },
    output: {
        publicPath: "auto",
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
        },
        extensions: ['.js', '.vue'],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // this will apply to both plain `.js` files
            // AND `<script>` blocks in `.vue` files
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // this will apply to both plain `.css` files
            // AND `<style>` blocks in `.vue` files
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
        ]
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
        new ModuleFederationPlugin({
            name: "appshell",
            remotes: {
                app1: "app1@http://localhost:3002/remoteEntry.js",
                app2: "app2@http://localhost:3003/remoteEntry.js",
                app3: "app3@http://localhost:3004/remoteEntry.js",
                mf_carousel: "_achhoeun_mf_carousel@https://unpkg.com/@achhoeun/mf-carousel@1.0.2/dist/browser/remoteEntry.js",
            },
            shared: [
                {
                    vue: {
                        singleton: true
                    },
                    svelte: {
                        singleton: true
                    },
                    react: {
                        singleton: true,
                    },
                    "react-dom": {
                        singleton: true,
                    },
                },
            ],
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ]
}