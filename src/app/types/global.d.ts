declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }

  const classNames: IClassNames;
  export = classNames;
}

declare module "*.svg" {
  import React, {ReactSVGElement} from "react";
  const SVG: React.VFC<React.SVGProps<ReactSVGElement>>
  export default SVG
}
declare module "*.jpg"
declare module "*.png"
declare module "*.jpeg"
declare const _IS_DEV_: boolean
