const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}

module.exports = {
    mode: mode,
    entry: './src/app.js',
    output: {
      filename: mode === 'production' ? 'bundle.[contenthash].js' : 'bundle.js',
      assetModuleFilename: 'assets/[name][ext][query]',
      clean: true,
      path: path.resolve(__dirname, 'dist'),
    },
    target: 'web',
    devtool: 'source-map',
    devServer:{
      static: './dist',
    },
    module: {
        rules: [
            {
              test: /\.(sa|sc|c)ss$/,
              use: [MiniCssExtractPlugin.loader, "css-loader",
              {
                loader: 'resolve-url-loader',
              }, {
                      loader: "postcss-loader",
                      options: {
                        postcssOptions: {
                          plugins: [
                            ["postcss-preset-env", {}],
                          ],
                        },
                      },
                  },
                  "sass-loader"],
            },
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource'
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: 'asset/resource',
            },
            {
              test: /\.html$/i,
              loader: "html-loader",
            },
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    ['@babel/preset-env', { targets: "defaults" }]
                  ]
                }
              }
            }
        ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: 'body',
      }),
      new MiniCssExtractPlugin({
        filename: (mode === 'development') ? 'bundle.css' : 'bundle.[contenthash].css'
      }),
    ],
}
