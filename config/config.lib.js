const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')

const resolve = url => path.resolve(__dirname, `../${url}`)

module.exports = {
  mode: 'production',
  devtool: false,
  entry: resolve('src/index.js'),
  output: {
    path: resolve('lib'),
    filename: 'more-dapp-component.js',
    library: 'more-dapp-component',
    libraryTarget: 'umd',
    umdNamedDefine: true
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
              'postcss-loader',
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
    new MiniCssExtractPlugin({
      filename: 'index.css',
      chunkFilename: '[id].[hash:4].css'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.style\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new OptimizeCssAssetsPlugin({}),
      new UglifyWebpackPlugin({})
    ]
  }
}