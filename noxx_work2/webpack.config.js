module.exports = {
  mode: 'development',
  entry: {
    no01_accordion: './src/js/no01_accordion.js',
    no02_modal: './src/js/no02_modal.js',
    no03_async: './src/js/no03_async.js',
    no04_imageSlider: './src/js/no04_imageSlider.js'
  },
  output: { filename: '[name].js' },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: [
          { loader: 'babel-loader' }
          // {
          //   loader: 'eslint-loader',
          //   options: { failOnError: false }
          // }
        ]
      }
    ]
  },
  resolve: { extensions: ['.js', '.ts'] }
}
