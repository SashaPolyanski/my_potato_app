import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const {mode, paths: {build, entry, html}, isDev} = options
  return ({
    mode,
    entry,
    module: {
      // Любая обработка файлов выходящих за js
      rules: buildLoaders()
    },
    output: {
      path: build,
      filename: '[name].[contenthash].js',
      clean: true
    },
    plugins: buildPlugins(html),
    resolve: buildResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  })

}

