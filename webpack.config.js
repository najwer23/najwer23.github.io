
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


var entryCustom = {};
let entryArr = [
  "index", 
  "loader/style", 
  "loader/file",
  "dataInObj", 
  "hamburger", 
  "masonry"
];

for (let i = 0; i < entryArr.length; i++) {
  entryCustom[entryArr[i]] = path.resolve(__dirname, './assets/js/' + entryArr[i] + '.js')
}

module.exports = {
  entry: entryCustom,
  output: {
    filename: '[name].[fullhash].bunde.js',
    path: path.resolve(__dirname, './build')
  },
  optimization: {
    minimizer: [
      '...',
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      favicon: "./assets/img/fg.png",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      },
      inject: "body",
      // scriptLoading: "defer"
    }),
    new MiniCssExtractPlugin({
      linkType: "text/css",
      filename: "[name].[fullhash].css",
      chunkFilename: "[id].css"
    }),
    new CleanWebpackPlugin(),
  ],
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  "ie": "11"
                }
              }]
            ]
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(?:ico|gif|svg|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img/',
              publicPath: 'assets/img/'
            }
          }
        ]
      },
    ]
  },
}