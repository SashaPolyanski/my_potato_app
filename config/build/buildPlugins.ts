import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const buildPlugins = (html: string): webpack.WebpackPluginInstance[] => [
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({template: html}),
]

