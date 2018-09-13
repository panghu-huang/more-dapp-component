const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const resolve = url => path.resolve(__dirname, `../${url}`)

module.exports = {
  mode: 'production',
  devtool: false,
  entry: {
    app: resolve('src/main.js')
  },
  output: {
    path: resolve('dist'),
    filename: 'js/[name].[hash:4].js'
  },
  resolve: {
    extensions: ['*', '.js', '.vue', '.styl', '.json'],
    alias: {
      src: resolve('src'),
      'vue$': 'vue/dist/vue.min.js'
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
              {
                loader: MiniCssExtractPlugin.loader
              },
              'css-loader',
              'stylus-loader'
            ]
          },
          cssSourceMap: false,
          cacheBusting: false,
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
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: 'css'
            }
          },
          'css-loader',
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
          'stylus-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('src/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:4].css',
      chunkFilename: 'css/[id].[hash:4].css'
    })
  ]
}