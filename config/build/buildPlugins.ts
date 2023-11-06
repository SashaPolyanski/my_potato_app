import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export const buildPlugins = (html: string, isDev: boolean): webpack.WebpackPluginInstance[] => [
  new webpack.ProgressPlugin(),
  new BundleAnalyzerPlugin(),
  new HtmlWebpackPlugin({ template: html }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css'
  }),
  new webpack.DefinePlugin({
    _IS_DEV_: JSON.stringify(isDev)
  })
]
