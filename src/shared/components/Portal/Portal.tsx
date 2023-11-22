import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
  children: ReactNode
  element?: HTMLElement
}

export const Portal: FC<PortalProps> = ({ element = document.body, children }) => {
  return createPortal(children, element)
}
