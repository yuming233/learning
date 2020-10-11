const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')


module.exports = {
  entry: './src/mian.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: 'dist/'     // 给打包图片加路径
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到dom中
        // 使用多个loader时，是从右向左运行
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 图片小于limit时，会将图片编译成base64字符串形式
              // 当图片大于limit时，需要使用file-loader模块进行加载
              limit: 8192,
              name: 'img/[name].[hash:8].[ext]'  //给八位hash值，给打包后图片命名
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }

    ]
  },
  resolve: {
    extensions: ['.js', '.css', 'vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('最终解释权归余明所有'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    // new UglifyjsWebpackPlugin() // 打包压缩 开发阶段是不需要的 
  ]
}