const path = require('path')

module.exports = {
  entry: './src/mian.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到dom中
        // 使用多个loader时，是从右向左运行
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
}