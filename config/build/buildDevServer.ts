import { type BuildOptions } from './types/config'
import { type Configuration as WebpackDevConf } from 'webpack-dev-server'

export const buildDevServer = (options: BuildOptions): WebpackDevConf => {
  const { port } = options
  return {
    port,
    open: true,
    historyApiFallback: true
  }
}
