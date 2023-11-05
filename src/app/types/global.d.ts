declare module '*.scss' {
  type IClassNames = Record<string, string>

  const classNames: IClassNames
  export = classNames
}

declare module '*.svg' {
  import { type ReactSVGElement } from 'react'
  import type React from 'react'
  const SVG: React.VFC<React.SVGProps<ReactSVGElement>>
  export default SVG
}
declare module '*.jpg'
declare module '*.png'
declare module '*.jpeg'
declare const _IS_DEV_: boolean
