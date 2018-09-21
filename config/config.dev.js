const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')

const resolve = url => path.resolve(__dirname, `../${url}`)

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: resolve('src/main.js')
  },
  resolve: {
    extensions: ['*', '.js', '.vue', '.styl', '.json'],
    alias: {
      src: resolve('src'),
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: resolve('src'),
        options: {
          loaders: {
            style: 'vue-style-loader',
            css: 'vue-style-loader!css-loader',
            stylus: [
              'vue-style-loader',
              'css-loader?sourceMap',
              'stylus-loader?sourceMap'
            ]
          },
          cssSourceMap: true,
          cacheBusting: true,
          transformToRequire: {
            video: ['src', 'poster'],
            source: 'src',
            img: 'src',
            image: 'xlink:href'
          }
        }
      },
      {
        test: /\.js$/,
        include: resolve('src'),
        loader: 'babel-loader'
      },
      {
        test: /\.styl/,
        use: [
          require.resolve('style-loader'),
          'css-loader?sourceMap',
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>0%',
                    'last 10 versions'
                  ],
                  flexbox: 'no-2009'
                })
              ]
            }
          },
          'stylus-loader?sourceMap'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('src/index.html')
    })
  ],
  devServer: {
    port: 3001,
    contentBase: resolve('dist')
  }
}