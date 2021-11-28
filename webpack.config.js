
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");


var entryCustom = {};
let entryArr = [
  "index", 
  "style", 
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
    path: path.resolve(__dirname, './build'),
    filename: '[name].bunde.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          type: "css/mini-extract",
          chunks: "all",
          enforce: true,
        },
      },
    },
    minimizer: [
      '...',
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      linkType: "text/css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      favicon: "./assets/img/fg.png",
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 5 }],
        ],
      },
    })

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
        test: /\.(sass|scss|css)$/,
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