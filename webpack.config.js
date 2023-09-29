const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "src", "index"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
    assetModuleFilename: (pathData) => {
      const filepath = path
        .dirname(pathData.filename)
        .split("/")
        .slice(1)
        .join("/");
      return `${filepath}/[name][ext]`;
    },
    clean: true
  },
  resolve: {
    extensions: ['.tsx', ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/assets/favicon.svg',
      template: path.join(__dirname, "src", "index.html"),
      filename: "index.html",
    }),
    new FileManagerPlugin({
      events: {
        onEnd: {
          copy: [
            {
              source: path.join("src", "assets", "pablic"),
              destination: path.join("dist", "assets", "pablic"),
            },
          ],
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new ESLintPlugin({ extensions: ["tsx", "ts", "js"] }),
  ],
  devtool: "inline-source-map",
  devServer: {
    watchFiles: path.join(__dirname, "src"),
    port: 9000,
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp|avif|ico)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};



// const production = process.env.NODE_ENV === 'production';

// module.exports = {
//   entry: path.join(__dirname, 'src', 'index'),
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: production ? 'index.[contenthash].js' : 'index.js',
//     // assetModuleFilename: (pathData) => {
//     //   const filepath = path
//     //     .dirname(pathData.filename)
//     //     .split('/')
//     //     .slice(1)
//     //     .join('/');
//     //   return `${filepath}/[name][ext]`;
//     // },
//   },
//   devServer: {
//     watchFiles: path.join(__dirname, "src"),
//     port: 9000,
//     historyApiFallback: true,
//   },
//   devtool: 'source-map',
//   resolve: {
//     extensions: ['.ts', '.js'],
//   },
//   plugins: [
//     new FileManagerPlugin({
//       events: {
//         onStart: {
//           delete: ['dist'],
//         },
//         onEnd: {
//           copy: [
//             {
//               source: path.join('src', 'assets'),
//               destination: path.join('dist', 'assets'),
//             },
//           ],
//         },
//       },
//     }),
//     new HtmlWebpackPlugin({
//       template: path.join(__dirname, 'src', 'index.html'),
//       filename: 'index.html',
//     }),
//     new MiniCssExtractPlugin({
//       filename: '[name].css',
//     }),
//     new ESLintPlugin({ extensions: 'ts' }),
//   ],
//   devtool: 'inline-source-map',
//   devServer: {
//     watchFiles: path.join(__dirname, 'dist'),
//     port: 9000,
//   },
//   module: {
//     rules: [
//       // babel
//       {
//         test: /\.(js|ts)x?$/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: [
//               "@babel/preset-env",
//               [
//                 "@babel/preset-react",
//                 {
//                   "runtime": "automatic"
//                 }
//               ],
//               "@babel/preset-typescript"
//             ],
//           },
//         },
//         exclude: /node_modules/,
//       },
//       // styles
//       {
//         test: /\.s(a|c)ss$/,
//         use: [
//           production ? MiniCssExtractPlugin.loader : 'style-loader',
//           'css-loader',
//           'postcss-loader',
//           {
//             loader: 'sass-loader',
//             options: {
//                 sourceMap: !production
//             }
//           }
//         ],
//       },
//       // images
//       {
//         test: /\.(png|jpg|jpeg|gif|svg)$/i,
//         type: 'asset/resource',
//       },
//       // fonts
//       {
//         test: /\.(woff2?|eot|ttf|otf)$/i,
//         exclude: /node_modules/,
//         type: 'asset/resource',
//       },
//       // html
//       {
//         test: /\.html$/i,
//         loader: 'html-loader',
//       },
//       // ts
//       {
//         test: /\.ts$/i,
//         use: 'ts-loader',
//       },
//     ],
//   },
// };